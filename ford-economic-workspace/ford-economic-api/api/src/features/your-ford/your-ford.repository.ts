import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { YourFordDto } from './dto/your-ford.dto';
import { ListarYourFords } from './interface/listar-your-fords.interface';
import { YourFordEntity } from './your-ford.entity';

@EntityRepository(YourFordEntity)
export class YourFordRepository extends Repository<YourFordEntity> {
	async criarYourFord(data: YourFordDto): Promise<YourFordEntity> {
		try {
			const yourFord = this.create(data);
			return this.save(yourFord);
		} catch (err) {
			throw new HttpException(
				'Erro ao salvar o Your Ford',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async listarYourFords(): Promise<ListarYourFords> {
		try {
			const [yourFords, total] = await this.findAndCount({
				relations: [
					'caracteristicaPrincipal',
					'caracteristicaSecundaria1',
					'caracteristicaSecundaria2',
					'usoCarro1',
					'usoCarro2',
					'modelo',
					'usuario',
				],
			});
			return { total, yourFords };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar Your Fords',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async listarYourFord(id: number): Promise<YourFordEntity> {
		try {
			const usuario = await this.findOne(id, {
				relations: [
					'caracteristicaPrincipal',
					'caracteristicaSecundaria1',
					'caracteristicaSecundaria2',
					'usoCarro1',
					'usoCarro2',
					'modelo',
					'usuario',
				],
			});
			if (!usuario)
				throw new HttpException(
					'Não foi encontrado um Your Ford com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return usuario;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar Your Ford',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
