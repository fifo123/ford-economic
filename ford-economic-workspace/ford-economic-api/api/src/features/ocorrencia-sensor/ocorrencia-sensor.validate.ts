import { HttpException, HttpStatus } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CarroSensorEntity } from '../carro-sensor/carro-sensor.entity';
import { OcorrenciaSensorDto } from './dto/ocorrencia-sensor.dto';

export async function validateOcorrenciaSensor(data: OcorrenciaSensorDto) {
	try {
		const carroSensor = getRepository<CarroSensorEntity>('CarroSensor');
		const tipoSensor = await carroSensor.findOne(data.carroSensor, {
			relations: ['sensor'],
		});
		let parametros: string;
		if (
			tipoSensor.sensor.nome == 'Ar-Condicionado' &&
			data.valor.nivelRuido != undefined &&
			typeof data.valor.nivelRuido == 'number' &&
			data.valor.temperatura != undefined &&
			typeof data.valor.temperatura == 'number' &&
			data.valor.tempoLigado != undefined &&
			typeof data.valor.tempoLigado == 'number'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Ar-Condicionado') {
			parametros = 'nivelRuido, temperatura, tempoLigado';
		}

		if (
			tipoSensor.sensor.nome == 'Quilometragem' &&
			data.valor.kmTotal != undefined &&
			typeof data.valor.kmTotal == 'number' &&
			data.valor.velocidadeAtual != undefined &&
			typeof data.valor.velocidadeAtual == 'number'
		) {
			return true;
		} else if (tipoSensor.sensor.nome == 'Quilometragem') {
			parametros = 'kmTotal, velocidadeAtual';
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
