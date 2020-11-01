import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SensorDto } from './dto/sensor.dto';
import { AtualizarSensorDto } from './dto/atualizar-sensor.dto';
import { ListarSensores } from './interface/listar-sensores.interface';
import { SensorEntity } from './sensor.entity';
import * as fs from 'fs';

@EntityRepository(SensorEntity)
export class SensorRepository extends Repository<SensorEntity> {
	async criarSensor(data: SensorDto): Promise<SensorEntity> {
		try {
			const sensor = this.create(data);
			return this.save(sensor);
		} catch (error) {
			throw new HttpException(
				'Erro ao salvar sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarSensores(): Promise<ListarSensores> {
		try {
			const [sensores, total] = await this.findAndCount();
			return { total, sensores };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar sensores',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarSensor(id: number): Promise<SensorEntity> {
		try {
			const sensor = await this.findOne(id);
			if (!sensor)
				throw new HttpException(
					'Não foi encontrado um sensor com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return sensor;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarSensor(
		id: number,
		data: AtualizarSensorDto,
	): Promise<SensorEntity> {
		try {
			const sensor = await this.findOne(id);

			if (data.icone) {
				await this.deleteFile(`./files/${sensor.icone}`);
			} else {
				console.log(data);
			}

			this.update(id, {
				...data,
			});
			return this.findOne(id);
		} catch (error) {
			throw new HttpException(
				'Erro ao atualizar sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarSensor(id: number): Promise<SensorEntity> {
		try {
			const sensor = await this.findOne(id);
			await this.deleteFile(`./files/${sensor.icone}`);

			this.delete(id);
			return sensor;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	private async deleteFile(path: string) {
		return new Promise((resolve, reject) => {
			fs.unlink(path, err => {
				if (err) reject(err);
				resolve('Deletado');
			});
		});
	}
}
