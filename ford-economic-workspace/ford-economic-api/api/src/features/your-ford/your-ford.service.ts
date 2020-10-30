import { Injectable } from '@nestjs/common';
import { YourFordDto } from './dto/your-ford.dto';
import { ListarYourFords } from './interface/listar-your-fords.interface';
import { YourFordEntity } from './your-ford.entity';
import { YourFordRepository } from './your-ford.repository';

@Injectable()
export class YourFordService {
	constructor(private readonly yourFordRepository: YourFordRepository) {}

	async criarYourFord(data: YourFordDto): Promise<YourFordEntity> {
		return this.yourFordRepository.criarYourFord(data);
	}

	async listarYourFords(): Promise<ListarYourFords> {
		return this.yourFordRepository.listarYourFords();
	}

	async listarYourFord(id: number): Promise<YourFordEntity> {
		return this.yourFordRepository.listarYourFord(id);
	}
}
