import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { ModeloDto } from './dto/modelo.dto';
import { ModeloEntity } from './modelo.entity';

@EntityRepository(ModeloEntity)
export class ModeloRepository extends Repository<ModeloEntity> {
	async criarModelo(data: ModeloDto): Promise<ModeloEntity> {
		try {
			const modelo = this.create(data);
			return this.save(modelo);
		} catch (error) {
			throw new HttpException(
				'Erro ao salvar sensor',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
