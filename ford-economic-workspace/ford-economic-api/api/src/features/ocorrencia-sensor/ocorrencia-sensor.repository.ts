import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { CarroSensorEntity } from '../carro-sensor/carro-sensor.entity';
import { AtualizarOcorrenciaSensorDto } from './dto/atualizar-ocorrencia-sensor.dto';
import { OcorrenciaSensorDto } from './dto/ocorrencia-sensor.dto';
import { ListarOcorrenciaSensores } from './interface/listar-ocorrencia-sensores.interface';
import { OcorrenciaSensorEntity } from './ocorrencia-sensor.entity';
import { validateOcorrenciaSensor } from './ocorrencia-sensor.validate';

@EntityRepository(OcorrenciaSensorEntity)
export class OcorrenciaSensorRepository extends Repository<
	OcorrenciaSensorEntity
> {
	async criarOcorrenciaSensor(
		data: OcorrenciaSensorDto,
	): Promise<OcorrenciaSensorEntity> {
		try {
			await validateOcorrenciaSensor(data);
			const ocorrenciaSensor = this.create(data);
			return this.save(ocorrenciaSensor);
		} catch (err) {
			throw new HttpException(err, HttpStatus.BAD_REQUEST);
		}
	}
	async listarOcorrenciaSensores(): Promise<ListarOcorrenciaSensores> {
		try {
			const [ocorrenciaSensores, total] = await this.findAndCount({
				relations: [
					'carroSensor',
					'carroSensor.carro',
					'carroSensor.sensor',
				],
			});
			return { total, ocorrenciaSensores };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar ocorrências de sensores',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarOcorrenciaSensor(id: number): Promise<OcorrenciaSensorEntity> {
		try {
			const ocorrenciaSensor = await this.findOne(id, {
				relations: [
					'carroSensor',
					'carroSensor.carro',
					'carroSensor.sensor',
				],
			});
			if (!ocorrenciaSensor)
				throw new HttpException(
					'Não foi encontrado uma ocorrência de sensor com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return ocorrenciaSensor;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar ocorrência de sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarOcorrenciaSensor(
		id: number,
		data: AtualizarOcorrenciaSensorDto,
	): Promise<OcorrenciaSensorEntity> {
		try {
			this.update(id, data);
			return this.listarOcorrenciaSensor(id);
		} catch (error) {
			throw new HttpException(
				'Erro ao atualizar Usuario',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarOcorrenciaSensor(id: number): Promise<OcorrenciaSensorEntity> {
		try {
			const ocorrenciaSensor = await this.findOne(id);
			this.delete(id);
			return ocorrenciaSensor;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar ocorrência de sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
