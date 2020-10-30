import { Injectable } from '@nestjs/common';
import { YourFordDto } from './dto/your-ford.dto';
import { YourFordEntity } from './your-ford.entity';
import { YourFordRepository } from './your-ford.repository';

@Injectable()
export class YourFordService {
	constructor(private readonly yourFordRepository: YourFordRepository) {}

	async criarYourFord(data: YourFordDto): Promise<YourFordEntity> {
		return this.yourFordRepository.criarYourFord(data);
	}
}
