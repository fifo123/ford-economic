import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { YourFordDto } from './dto/your-ford.dto';
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
}
