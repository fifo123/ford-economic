import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UsoCarroEntity } from './uso-carro.entity';
import { UsoCarroDto } from './dto/uso-carro.dto';
import * as fs from 'fs';
import { ListarUsosCarro } from './interface/listar-usos-carro.interface';
import { AtualizarUsoCarroDto } from './dto/atualizar-uso-carro.dto';

@EntityRepository(UsoCarroEntity)
export class UsoCarroRepository extends Repository<UsoCarroEntity> {
	async criarUsoCarro(data: UsoCarroDto): Promise<UsoCarroEntity> {
		try {
			const usoCarro = this.create(data);
			return this.save(usoCarro);
		} catch (error) {
			throw new HttpException(
				'Erro ao salvar UsoCarro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async listarUsoCarros(): Promise<ListarUsosCarro> {
		try {
			const [usoCarros, total] = await this.findAndCount();
			return { total, usoCarros };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar UsosCarro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarUsoCarro(id: number): Promise<UsoCarroEntity> {
		try {
			const usoCarro = await this.findOne(id);
			if (!usoCarro)
				throw new HttpException(
					'Não foi encontrado um UsoCarro com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return usoCarro;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar UsoCarros',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarUsoCarro(
		id: number,
		data: AtualizarUsoCarroDto,
	): Promise<UsoCarroEntity> {
		try {
			const usoCarro = await this.findOne(id);

			if (data.icone) {
				await this.deleteFile(`./files/${usoCarro.icone}`);
			} else {
				console.log(data);
			}

			const usoCarroAtualizado = await this.update(id, {
				...data,
			});
			console.log(usoCarroAtualizado);

			return this.findOne(id);
		} catch (error) {
			console.log(error);

			throw new HttpException(
				'Erro ao atualizar UsoCarros',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarUsoCarro(id: number): Promise<UsoCarroEntity> {
		try {
			const usoCarro = await this.findOne(id);
			await this.deleteFile(`./files/${usoCarro.icone}`);
			this.delete(id);
			return usoCarro;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar UsoCarros',
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
