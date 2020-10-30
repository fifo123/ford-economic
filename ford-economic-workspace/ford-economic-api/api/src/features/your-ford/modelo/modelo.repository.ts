import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AtualizarModeloDto } from './dto/atualizar.modelo';
import { ModeloDto } from './dto/modelo.dto';
import { ListarModelos } from './interface/listar-modelos.interface';
import { ModeloEntity } from './modelo.entity';
import * as fs from 'fs';

@EntityRepository(ModeloEntity)
export class ModeloRepository extends Repository<ModeloEntity> {
	async criarModelo(data: ModeloDto): Promise<ModeloEntity> {
		try {
			const modelo = this.create(data);
			return this.save(modelo);
		} catch (error) {
			throw new HttpException(
				'Erro ao salvar modelo',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async listarModelos(): Promise<ListarModelos> {
		try {
			const [modelos, total] = await this.findAndCount();
			return { total, modelos };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar modelo',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarModelo(id: number): Promise<ModeloEntity> {
		try {
			const modelo = await this.findOne(id);
			if (!modelo)
				throw new HttpException(
					'Não foi encontrado um modelo com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return modelo;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar modelo',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarModelo(
		id: number,
		data: AtualizarModeloDto,
	): Promise<ModeloEntity> {
		try {
			const modelo = await this.findOne(id);

			if (data.imagem) {
				await this.deleteFile(`./files/${modelo.imagem}`);
			} else {
				console.log(data);
			}

			const modeloAtualizado = await this.update(id, { ...data });
			console.log(modeloAtualizado);

			return this.findOne(id);
		} catch (error) {
			console.log(error);

			throw new HttpException(
				'Erro ao atualizar modelo',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarModelo(id: number): Promise<ModeloEntity> {
		try {
			const modelo = await this.findOne(id);
			await this.deleteFile(`./files/${modelo.imagem}`);
			this.delete(id);
			return modelo;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar modelo',
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
