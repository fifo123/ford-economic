import { Injectable } from '@nestjs/common';
import { ModeloDto } from './dto/modelo.dto';
import { ModeloEntity } from './modelo.entity';
import { ModeloRepository } from './modelo.repository';

@Injectable()
export class ModeloService {
	constructor(private readonly modeloRepository: ModeloRepository) {}

	async criarModelo(
		data: Partial<ModeloDto>,
		imagem: string,
	): Promise<ModeloEntity> {
		const modeloDto: ModeloDto = { nome: data.nome, imagem };
		return this.modeloRepository.criarModelo(modeloDto);
	}
}
