import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CaracteristicaEntity } from './caracteristica.entity';
import { CaracteristicaDto } from './dto/caracteristica.dto';
import * as fs from 'fs';
import { ListarCaracteristicas } from './interface/listar-caracteristicas.interface';
import { AtualizarCaracteristicaDto } from './dto/atualizar-caracteristica.dto';

@EntityRepository(CaracteristicaEntity)
export class CaracteristicaRepository extends Repository<CaracteristicaEntity> {
	async criarCaracteristica(
		data: CaracteristicaDto,
	): Promise<CaracteristicaEntity> {
		try {
			const caracteristica = this.create(data);
			return this.save(caracteristica);
		} catch (error) {
			throw new HttpException(
				'Erro ao salvar caracteristica',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async listarCaracteristicas(): Promise<ListarCaracteristicas> {
		try {
			const [caracteristicas, total] = await this.findAndCount();
			return { total, caracteristicas };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar caracteristicas',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarCaracteristica(id: number): Promise<CaracteristicaEntity> {
		try {
			const caracteristicas = await this.findOne(id);
			if (!caracteristicas)
				throw new HttpException(
					'Não foi encontrado um caracteristicas com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return caracteristicas;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar caracteristicas',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarCaracteristica(
		id: number,
		data: AtualizarCaracteristicaDto,
	): Promise<CaracteristicaEntity> {
		try {
			const caracteristicas = await this.findOne(id);

			if (data.icone) {
				await this.deleteFile(`./files/${caracteristicas.icone}`);
			} else {
				console.log(data);
			}

			const caracteristicasAtualizado = await this.update(id, {
				...data,
			});
			console.log(caracteristicasAtualizado);

			return this.findOne(id);
		} catch (error) {
			console.log(error);

			throw new HttpException(
				'Erro ao atualizar caracteristicas',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarCaracteristica(id: number): Promise<CaracteristicaEntity> {
		try {
			const caracteristicas = await this.findOne(id);
			await this.deleteFile(`./files/${caracteristicas.icone}`);
			this.delete(id);
			return caracteristicas;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar caracteristicas',
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
