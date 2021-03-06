import { HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';
import { CarroSensorEntity } from './carro-sensor.entity';
import { AtualizarCarroSensorDto } from './dto/atualizar-carro-sensor.dto';
import { CarroSensorDto } from './dto/carro-sensor.dto';
import { ListarCarroSensores } from './interface/listar-carro-sensores.interface';
import { FeatureSensores } from './interface/feature-sensores.interface';
import { QueryFeatureSensores } from './interface/query-feature-sensores.interface';
import { QueryFeatureEconomic } from './interface/query-feture-economic.interface';
import { CarroService } from '../carro/carro.service';
import { CarroEntity } from '../carro/carro.entity';
import { QueryFeatureRelatoriosGeral } from './interface/query-feature-geral-relatorios';
import * as moment from 'moment';

@EntityRepository(CarroSensorEntity)
export class CarroSensorRepository extends Repository<CarroSensorEntity> {
	async criarCarroSensor(data: CarroSensorDto): Promise<CarroSensorEntity> {
		try {
			const validateSensor = await this.find({
				where: {
					sensor: data.sensor,
					carro: data.carro,
				},
			});
			if (validateSensor.length > 0) {
				throw new HttpException(
					'Erro ao salvar carro, já possui esse sensor',
					HttpStatus.BAD_REQUEST,
				);
			}

			const carroSensor = this.create(data);
			return this.save(carroSensor);
		} catch (err) {
			throw new HttpException(
				'Erro ao salvar carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarCarroSensores(): Promise<ListarCarroSensores> {
		try {
			const [carroSensor, total] = await this.findAndCount({
				relations: ['sensor', 'carro', 'ocorrenciaSensor'],
				order: {
					criado: 'DESC',
				},
			});
			return { total, carroSensor };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar sensores de carros',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarCarroSensor(id: number): Promise<CarroSensorEntity> {
		try {
			const carroSensor = await this.findOne(id, {
				relations: ['sensor', 'carro', 'ocorrenciaSensor'],
				order: {
					criado: 'DESC',
				},
			});
			if (!carroSensor)
				throw new HttpException(
					'Não foi encontrado um sensor de carro com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return carroSensor;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarCarroSensor(
		id: number,
		data: AtualizarCarroSensorDto,
	): Promise<CarroSensorEntity> {
		try {
			this.update(id, data);
			return this.listarCarroSensor(id);
		} catch (error) {
			throw new HttpException(
				'Erro ao atualizar sensor de carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarCarroSensor(id: number): Promise<CarroSensorEntity> {
		try {
			const carroSensor = await this.findOne(id);
			this.delete(id);
			return carroSensor;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar sensor de carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async featureSensores(idCarro: number) {
		try {
			const query = this.createQueryBuilder('CarroSensor');
			query.innerJoin('CarroSensor.sensor', 'Sensor');
			query.innerJoin('CarroSensor.carro', 'Carro');
			query.leftJoin('CarroSensor.ocorrenciaSensor', 'OcorrenciaSensor');
			query.select('Sensor.nome', 'nomeSensor');
			query.addSelect('Sensor.id', 'idSensor');
			query.addSelect('Sensor.icone', 'iconeSensor');
			query.where('Carro.id = :id', {
				id: idCarro,
			});
			query.groupBy('Sensor.nome, Sensor.icone, Sensor.id');

			const sensores = await query.getRawMany<QueryFeatureSensores>();

			query.andWhere(
				`OcorrenciaSensor.criado >= current_timestamp - '1 minute 30 second'::interval`,
			);
			const sensoresOnline = await query.getRawMany<
				QueryFeatureSensores
			>();

			const nomesSensoresOnlines = sensoresOnline.map(
				sensor => sensor.nomeSensor,
			);
			const featureSensores: FeatureSensores[] = sensores.map(sensor => {
				if (nomesSensoresOnlines.indexOf(sensor.nomeSensor) >= 0) {
					return {
						icone: sensor.iconeSensor,
						ligado: true,
						nome: sensor.nomeSensor,
						id: sensor.idSensor.toString(),
					};
				}
				return {
					icone: sensor.iconeSensor,
					ligado: false,
					nome: sensor.nomeSensor,
					id: sensor.idSensor.toString(),
				};
			});
			return featureSensores;
		} catch (error) {}
	}

	async featureRelatorios(idCarro: number) {
		try {
			const query = this.createQueryBuilder('CarroSensor');
			query.innerJoin('CarroSensor.sensor', 'Sensor');
			query.innerJoin('CarroSensor.carro', 'Carro');
			query.leftJoin('CarroSensor.ocorrenciaSensor', 'OcorrenciaSensor');
			query.select('Sensor.nome', 'nomeSensor');
			query.addSelect('Sensor.id', 'idSensor');
			query.addSelect('COUNT(Sensor.id)', 'qtdOcorrencias');
			query.where('Carro.id = :id', {
				id: idCarro,
			});
			query.groupBy('Sensor.nome, Sensor.id');

			const relatorio = await query.getRawMany<
				QueryFeatureRelatoriosGeral
			>();
			console.log(relatorio);

			console.log('asdasd');
			var retorno: any[] = [];
			retorno.push(['Nome Sensor', 'Ocorrencias']);
			console.log(retorno);

			relatorio.map(result => {
				console.log(result);

				retorno.push([result.nomeSensor, +result.qtdOcorrencias]);
			});
			console.log(retorno);

			return retorno;
		} catch (error) {}
	}

	async featureRelatoriosSensorMes(idCarro: number, idSensor: number) {
		try {
			var retorno: any[] = [];
			var dias: number = 0;

			console.log(idCarro, idSensor);
			let nomeSensor: string = '';
			do {
				const query = this.createQueryBuilder('CarroSensor');
				query.innerJoin('CarroSensor.sensor', 'Sensor');
				query.innerJoin('CarroSensor.carro', 'Carro');
				query.leftJoin(
					'CarroSensor.ocorrenciaSensor',
					'OcorrenciaSensor',
				);
				query.select('COUNT(Sensor.id)', 'qtdOcorrencias');
				query.addSelect(
					`to_char(current_date - '${dias} days'::interval, 'DD/MM')`,
					'dia',
				);
				query.addSelect(`Sensor.nome`, 'nomeSensor');
				query.where('Carro.id = :id', {
					id: idCarro,
				});
				query.andWhere('Sensor.id = :idSensor', {
					idSensor,
				});
				query.andWhere(
					`OcorrenciaSensor.criado >= current_date - '${dias} days'::interval`,
				);
				query.andWhere(
					`OcorrenciaSensor.criado < current_date - '${dias -
						1} days'::interval`,
				);
				query.groupBy('Sensor.nome, Sensor.id');

				const relatorio = await query.getRawOne<{
					qtdOcorrencias: number;
					dia: string;
					nomeSensor: string;
				}>();
				retorno.push([
					moment()
						.subtract(dias, 'days')
						.format('DD/MM'),
					relatorio ? +relatorio.qtdOcorrencias : 0,
				]);
				nomeSensor =
					nomeSensor != ''
						? nomeSensor
						: relatorio
						? relatorio.nomeSensor
						: '';
				dias++;
			} while (dias <= 29);
			retorno.unshift([`Ocorrências para o senhor de ${nomeSensor}`, '']);
			return retorno;
		} catch (error) {
			console.log(error);
		}
	}

	async featureEconomic(idCarro: number) {
		try {
			const query = this.createQueryBuilder('CarroSensor');
			query.innerJoin('CarroSensor.sensor', 'Sensor');
			query.innerJoin('CarroSensor.carro', 'Carro');
			query.leftJoin('CarroSensor.ocorrenciaSensor', 'OcorrenciaSensor');
			query.select('Sensor.nome', 'nomeSensor');
			query.addSelect('Sensor.icone', 'iconeSensor');
			query.addSelect('OcorrenciaSensor.valor', 'valor');
			query.addSelect('Carro.motor', 'motor');
			query.addSelect('Carro.potencia', 'potencia');
			query.addSelect('Carro.cargaBateria', 'cargaBateria');

			query.where('Carro.id = :idCarro', {
				idCarro: idCarro,
			});

			query.groupBy(
				'Sensor.nome, Sensor.icone, OcorrenciaSensor.valor, Carro.motor, Carro.potencia, Carro.cargaBateria',
			);

			const sensores = await query.getRawMany<QueryFeatureEconomic>();

			const featureEconomic: QueryFeatureEconomic[] = sensores.map(
				sensor => {
					return {
						iconeSensor: sensor.iconeSensor,
						nomeSensor: sensor.nomeSensor,
						valor: sensor.valor,
						motor: sensor.motor,
						potencia: sensor.potencia,
						cargaBateria: sensor.cargaBateria,
					};
				},
			);

			return featureEconomic;
		} catch (error) {}
	}

	async featureCompare(idCarro: number) {
		try {
			const queryCarro = this.createQueryBuilder('CarroSensor');
			queryCarro.innerJoin('CarroSensor.carro', 'Carro');
			queryCarro.select('DISTINCT Carro.modelo', 'modelo');

			const carro = await queryCarro.getRawMany<{ modelo: string }>();
			const modeloCarro = carro[0].modelo;

			const query = this.createQueryBuilder('CarroSensor');
			query.innerJoin('CarroSensor.sensor', 'Sensor');
			query.innerJoin('CarroSensor.carro', 'Carro');
			query.leftJoin('CarroSensor.ocorrenciaSensor', 'OcorrenciaSensor');
			query.select('Sensor.nome', 'nomeSensor');
			query.addSelect('Carro.id', 'idCarro');
			query.addSelect('Carro.modelo', 'modelo');
			query.addSelect('Sensor.icone', 'iconeSensor');
			query.addSelect('OcorrenciaSensor.valor', 'valor');

			query.where('Carro.modelo = :modeloCarro', {
				modeloCarro: modeloCarro,
			});
			query.andWhere('Carro.id <> :idCarro', {
				idCarro: idCarro,
			});
			query.andWhere('Sensor.nome ILIKE :nomeSensor', {
				nomeSensor: 'Uso Geral',
			});
			query.orderBy('OcorrenciaSensor.criado', 'DESC');

			const sensores = await query.getRawMany<{
				iconeSensor: string;
				nomeSensor: string;
				idCarro: number;
				valor: any;
				motor: string;
				potencia: string;
				cargaBateria: string;
			}>();

			let ultimosSensores = [sensores[0]];
			let idSensores = [sensores[0].idCarro];

			const ids = sensores.map(sensor => {
				if (idSensores.indexOf(sensor.idCarro) == -1) {
					ultimosSensores.push(sensor);
					idSensores.push(sensor.idCarro);
				}
			});

			console.log('Esse cara aqui ->', ultimosSensores);
			const query2 = this.createQueryBuilder('CarroSensor');
			query2.innerJoin('CarroSensor.sensor', 'Sensor');
			query2.innerJoin('CarroSensor.carro', 'Carro');
			query2.leftJoin('CarroSensor.ocorrenciaSensor', 'OcorrenciaSensor');
			query2.select('Sensor.nome', 'nomeSensor');
			query2.addSelect('Carro.id', 'idCarro');
			query2.addSelect('Carro.modelo', 'modelo');
			query2.addSelect('Sensor.icone', 'iconeSensor');
			query2.addSelect('OcorrenciaSensor.valor', 'valor');

			query2.andWhere('Carro.id = :idCarro', {
				idCarro: idCarro,
			});
			query2.andWhere('Sensor.nome ILIKE :nomeSensor', {
				nomeSensor: 'Uso Geral',
			});
			query2.orderBy('OcorrenciaSensor.criado', 'DESC');

			const carroPesquisado = await query2.getRawOne();
			console.log(carroPesquisado);

			const total = idSensores.length + 1;

			const acima = ultimosSensores.map(sensor => {
				if (sensor.valor.kmTotal >= carroPesquisado.valor.kmTotal) {
					return sensor;
				}
			});

			console.log('Acima: ', acima.length);
			console.log('Total: ', total);

			return {
				porcentagem: (acima.length * 100) / total,
				nome: 'Uso Geral',
				carro: modeloCarro,
				imagem: acima[0].iconeSensor,
			};
		} catch (error) {}
	}
}
