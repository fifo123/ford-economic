import { HttpException, HttpStatus } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CarroSensorEntity } from '../carro-sensor/carro-sensor.entity';
import { OcorrenciaSensorDto } from './dto/ocorrencia-sensor.dto';
import { OcorrenciaSensorEntity } from './ocorrencia-sensor.entity';

export async function validateOcorrenciaSensor(data: OcorrenciaSensorDto) {
	try {
		const carroSensor = getRepository<CarroSensorEntity>('CarroSensor');
		const tipoSensor = await carroSensor.findOne(data.carroSensor, {
			relations: ['sensor'],
		});

		const verificaLigado = getRepository<OcorrenciaSensorEntity>(
			'OcorrenciaSensor',
		);
		const queryVerifica = verificaLigado.createQueryBuilder(
			'OcorrenciaSensor',
		);
		queryVerifica.innerJoin('OcorrenciaSensor.carroSensor', 'carroSensor');
		queryVerifica.innerJoin('carroSensor.sensor', 'sensor');
		queryVerifica.select('OcorrenciaSensor.valor', 'valor');
		queryVerifica.where(`sensor.nome ILIKE 'Ignição'`);
		queryVerifica.orderBy('OcorrenciaSensor.criado', 'DESC');
		const ocorrenciasIgnicao = await queryVerifica.getRawMany<
			OcorrenciaSensorEntity
		>();

		if (
			ocorrenciasIgnicao.length > 0
				? ocorrenciasIgnicao[0].valor.ligado == false
				: 1
		) {
			if (tipoSensor.sensor.nome != 'Ignição') {
				throw new HttpException(
					'O carro está desligado',
					HttpStatus.BAD_REQUEST,
				);
			}
		}

		if (!tipoSensor) {
			throw new HttpException(
				'O carro não possui esse sensor cadastrado',
				HttpStatus.BAD_REQUEST,
			);
		}

		let parametros: string;
		if (
			tipoSensor.sensor.nome == 'Ar-Condicionado' &&
			data.valor.nivelRuido != undefined &&
			typeof data.valor.nivelRuido == 'number' &&
			data.valor.temperatura != undefined &&
			typeof data.valor.temperatura == 'number'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Ar-Condicionado') {
			parametros = 'nivelRuido, temperatura';
		}

		if (
			tipoSensor.sensor.nome == 'Uso Geral' &&
			data.valor.kmTotal != undefined &&
			typeof data.valor.kmTotal == 'number' &&
			data.valor.velocidadeAtual != undefined &&
			typeof data.valor.velocidadeAtual == 'number' &&
			data.valor.contaGiros != undefined &&
			typeof data.valor.contaGiros == 'number' &&
			data.valor.peso != undefined &&
			typeof data.valor.peso == 'number'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Uso Gerais') {
			parametros = 'kmTotal, velocidadeAtual, contaGiros, peso';
		}

		if (
			tipoSensor.sensor.nome == 'Ignição' &&
			data.valor.ligado != undefined &&
			typeof data.valor.ligado == 'boolean'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Ignição') {
			parametros = 'ligado';
		}

		if (
			tipoSensor.sensor.nome == 'Combustível' &&
			data.valor.quantidadeAtual != undefined &&
			typeof data.valor.quantidadeAtual == 'number' &&
			data.valor.tipoCombustivel != undefined &&
			typeof data.valor.tipoCombustivel == 'string'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Combustível') {
			parametros = 'quantidadeAtual, tipoCombustivel';
		}

		if (
			tipoSensor.sensor.nome == 'Bateria' &&
			data.valor.consumoTotal != undefined &&
			typeof data.valor.consumoTotal == 'number'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Bateria') {
			parametros = 'consumoTotal';
		}

		if (
			tipoSensor.sensor.nome == 'Frenagem' &&
			data.valor.temperaturaDisco != undefined &&
			typeof data.valor.temperaturaDisco == 'number' &&
			data.valor.estaRaspando != undefined &&
			typeof data.valor.estaRaspando == 'boolean'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Frenagem') {
			parametros = 'temperaturaDisco, estaRaspando';
		}

		if (
			tipoSensor.sensor.nome == 'Motor' &&
			data.valor.temperaturaMotor != undefined &&
			typeof data.valor.temperaturaMotor == 'number' &&
			data.valor.qtdOleo != undefined &&
			typeof data.valor.qtdOleo == 'number'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Motor') {
			parametros = 'temperaturaMotor, qtdOleo';
		}

		throw new HttpException(
			'Para o sensor: ' +
				tipoSensor.sensor.nome +
				', parâmetros incorretos. Parâmetros necessários: ' +
				parametros,
			HttpStatus.BAD_REQUEST,
		);
	} catch (error) {
		throw new HttpException(error, HttpStatus.BAD_REQUEST);
	}
}
