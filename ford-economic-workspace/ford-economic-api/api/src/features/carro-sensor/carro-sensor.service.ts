import { Injectable, Post } from '@nestjs/common';
import { CarroController } from '../carro/carro.controller';
import { CarroEntity } from '../carro/carro.entity';
import { CarroRepository } from '../carro/carro.repository';
import { CarroService } from '../carro/carro.service';
import { CarroSensorEntity } from './carro-sensor.entity';
import { CarroSensorRepository } from './carro-sensor.repository';
import { AtualizarCarroSensorDto } from './dto/atualizar-carro-sensor.dto';
import { CarroSensorDto } from './dto/carro-sensor.dto';
import { ListarCarroSensores } from './interface/listar-carro-sensores.interface';
import { QueryFeatureEconomic } from './interface/query-feture-economic.interface';

@Injectable()
export class CarroSensorService {
	constructor(
		private readonly carroSensorRepository: CarroSensorRepository,
	) {}

	async criarCarroSensor(data: CarroSensorDto): Promise<CarroSensorEntity> {
		return this.carroSensorRepository.criarCarroSensor(data);
	}

	async listarCarroSensores(): Promise<ListarCarroSensores> {
		return this.carroSensorRepository.listarCarroSensores();
	}

	async listarCarroSensor(id: number): Promise<CarroSensorEntity> {
		return this.carroSensorRepository.listarCarroSensor(id);
	}

	async atualizarCarroSensor(
		id: number,
		data: AtualizarCarroSensorDto,
	): Promise<CarroSensorEntity> {
		return this.carroSensorRepository.atualizarCarroSensor(id, data);
	}

	async deletarCarroSensor(id: number): Promise<CarroSensorEntity> {
		return this.carroSensorRepository.deletarCarroSensor(id);
	}

	async featureSensores(idCarro: number) {
		return this.carroSensorRepository.featureSensores(idCarro);
	}

	async featureEconomic(idCarro: number) {
		const sensorValues: Promise<QueryFeatureEconomic[]> = this.carroSensorRepository.featureEconomic(
			idCarro,
		);

		const featureEconomic = (await sensorValues).map(sensor => {
			switch (sensor.nomeSensor) {
				case 'Frenagem':
					return this.trataFrenagem(sensor);
				case 'Ar-Condicionado':
					return this.trataArCondicionado(sensor);
				case 'Combustível':
					return this.trataCombustivel(sensor);
				case 'Motor':
					return this.trataMotor(sensor);
				case 'Uso Geral':
					return this.trataUsoGeral(sensor);
				case 'Bateria':
					return this.trataBateria(sensor);
				default:
					return null;
			}
		});
		return featureEconomic;
	}

	async featureCompare(idCarro: number) {
		return this.carroSensorRepository.featureCompare(idCarro);
	}

	trataFrenagem(sensor) {
		return {
			nomeSensor: sensor.nomeSensor,
			iconeSensor: sensor.iconeSensor,
			valor: {
				'Temperatura do disco':
					Number(sensor.valor[Object.keys(sensor.valor)[1]]) + '°C',
				'Integridade pastilha': Boolean(
					sensor.valor[Object.keys(sensor.valor)[0]],
				)
					? 'Estável'
					: 'Instável',
			},
		};
	}

	trataCombustivel(sensor) {
		return {
			nomeSensor: sensor.nomeSensor,
			iconeSensor: sensor.iconeSensor,
			valor: {
				'Tipo combustível': sensor.valor[Object.keys(sensor.valor)[1]],

				Consumo:
					Number(sensor.valor[Object.keys(sensor.valor)[0]]) + 'km/L',
			},
		};
	}

	trataArCondicionado(sensor) {
		return {
			nomeSensor: sensor.nomeSensor,
			iconeSensor: sensor.iconeSensor,
			valor: {
				Temperatura:
					Number(sensor.valor[Object.keys(sensor.valor)[1]]) + '°C',
				'Nível de ruído':
					Number(sensor.valor[Object.keys(sensor.valor)[0]]) + 'dB',
			},
		};
	}

	trataBateria(sensor) {
		return {
			nomeSensor: sensor.nomeSensor,
			iconeSensor: sensor.iconeSensor,
			valor: {
				'Consumo total':
					Number(sensor.valor[Object.keys(sensor.valor)[0]]) + 'mAh',
				'Autonomia restante':
					(sensor.cargaBateria * 1000) /
						sensor.valor[Object.keys(sensor.valor)[0]] +
					'h',
				'Carga total': sensor.cargaBateria + 'Ah',
			},
		};
	}

	trataMotor(sensor) {
		return {
			nomeSensor: sensor.nomeSensor,
			iconeSensor: sensor.iconeSensor,
			valor: {
				Modelo: sensor.motor,
				Potência: sensor.potencia + 'cv',
				'Temperatura Motor':
					Number(sensor.valor[Object.keys(sensor.valor)[1]]) + '°C',
				'Nível de óleo':
					Number(sensor.valor[Object.keys(sensor.valor)[0]]) + '%',
			},
		};
	}

	trataUsoGeral(sensor) {
		return {
			nomeSensor: sensor.nomeSensor,
			iconeSensor: sensor.iconeSensor,
			valor: {
				'KM TOTAL':
					Number(sensor.valor[Object.keys(sensor.valor)[1]]) + 'Km',
				'Velocidade atual':
					Number(sensor.valor[Object.keys(sensor.valor)[3]]) + 'Km/h',
				'Conta giros':
					Number(sensor.valor[Object.keys(sensor.valor)[2]]) + 'RPM',
				Peso: Number(sensor.valor[Object.keys(sensor.valor)[0]]) + 'KG',
			},
		};
	}
}
