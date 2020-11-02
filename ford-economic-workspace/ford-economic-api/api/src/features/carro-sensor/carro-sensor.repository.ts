import { HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';
import { CarroSensorEntity } from './carro-sensor.entity';
import { AtualizarCarroSensorDto } from './dto/atualizar-carro-sensor.dto';
import { CarroSensorDto } from './dto/carro-sensor.dto';
import { ListarCarroSensores } from './interface/listar-carro-sensores.interface';
import { FeatureSensores } from './interface/feature-sensores.interface';
import { QueryFeatureSensores } from './interface/query-feature-sensores.interface';

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
			query.addSelect('Sensor.icone', 'iconeSensor');
			query.where('Carro.id = :id', {
				id: idCarro,
			});
			query.groupBy('Sensor.nome, Sensor.icone');

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
					};
				}
				return {
					icone: sensor.iconeSensor,
					ligado: false,
					nome: sensor.nomeSensor,
				};
			});
			return featureSensores;
		} catch (error) {}
	}
}
