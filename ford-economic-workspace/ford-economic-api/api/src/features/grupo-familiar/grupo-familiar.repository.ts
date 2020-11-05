import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { GrupoFamiliarDto } from './dto/grupo-familiar.dto';
import { GrupoFamiliarEntity } from './grupo-familiar.entity';
import { ListarGruposFamiliares } from './interface/listar-grupos-familiares.interface';

@EntityRepository(GrupoFamiliarEntity)
export class GrupoFamiliarRepository extends Repository<GrupoFamiliarEntity> {
	async criarGrupoFamiliar(
		data: GrupoFamiliarDto,
	): Promise<GrupoFamiliarEntity> {
		try {
			const grupoFamiliar = this.create(data);
			return this.save(grupoFamiliar);
		} catch (error) {
			throw new HttpException(
				'Erro ao salvar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarGruposFamiliares(): Promise<ListarGruposFamiliares> {
		try {
			const [gruposFamiliares, total] = await this.findAndCount();
			return { total, gruposFamiliares };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar Grupos Familiares',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarGrupoFamiliar(id: number): Promise<GrupoFamiliarEntity> {
		try {
			const grupoFamiliar = await this.findOne(id, {
				relations: ['usuarios', 'usuarios.carro'],
			});
			if (!grupoFamiliar)
				throw new HttpException(
					'Não foi encontrado um Grupo Familiar com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return grupoFamiliar;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarGrupoFamiliar(
		id: number,
		data: GrupoFamiliarDto,
	): Promise<GrupoFamiliarEntity> {
		try {
			this.update(id, data);
			return this.findOne(id);
		} catch (error) {
			throw new HttpException(
				'Erro ao atualizar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarGrupoFamiliar(id: number): Promise<GrupoFamiliarEntity> {
		try {
			const grupoFamiliar = await this.findOne(id);
			this.delete(id);
			return grupoFamiliar;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
