import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CarroEntity } from './carro.entity';
import { AtualizarCarroDto } from './dto/atualizar-carro.dto';
import { CarroDto } from './dto/carro.dto';
import { ListarCarros } from './interface/listar-carros.interface';
import * as fs from 'fs';

@EntityRepository(CarroEntity)
export class CarroRepository extends Repository<CarroEntity> {
	async criarCarro(data: CarroDto): Promise<CarroEntity> {
		try {
			const carro = this.create(data);
			return this.save(carro);
		} catch (err) {
			throw new HttpException(
				'Erro ao salvar carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarCarros(): Promise<ListarCarros> {
		try {
			const [carros, total] = await this.findAndCount({
				relations: ['usuario', 'localizacao'],
			});
			return { total, carros };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar carros',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarCarro(id: number): Promise<CarroEntity> {
		try {
			const usuario = await this.findOne(id, {
				relations: ['usuario', 'localizacao'],
			});
			if (!usuario)
				throw new HttpException(
					'Não foi encontrado um carro com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return usuario;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarCarro(
		id: number,
		data: AtualizarCarroDto,
	): Promise<CarroEntity> {
		try {
			const carro = await this.findOne(id);

			if (data.imagem) {
				await this.deleteFile(`./files/${carro.imagem}`);
			} else {
				console.log(data);
			}

			await this.update(id, { ...data });
			return this.listarCarro(id);
		} catch (error) {
			console.log(error);

			throw new HttpException(
				'Erro ao atualizar carro',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarCarro(id: number): Promise<CarroEntity> {
		try {
			const carro = await this.findOne(id);
			await this.deleteFile(`./files/${carro.imagem}`);

			this.delete(id);
			return carro;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar carro',
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
