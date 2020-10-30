import { Injectable } from '@nestjs/common';
import { AtualizarModeloDto } from './dto/atualizar.modelo';
import { ModeloDto } from './dto/modelo.dto';
import { ListarModelos } from './interface/listar-modelos.interface';
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

	async listarModelos(): Promise<ListarModelos> {
		return this.modeloRepository.listarModelos();
	}

	async listarModelo(id: number): Promise<ModeloEntity> {
		return this.modeloRepository.listarModelo(id);
	}

	async atualizarModelo(
		id: number,
		data: AtualizarModeloDto,
		filename?: string,
	): Promise<ModeloEntity> {
		if (filename) data.imagem = filename;
		console.log(data);

		return this.modeloRepository.atualizarModelo(id, data);
	}

	async deletarModelo(id: number): Promise<ModeloEntity> {
		return this.modeloRepository.deletarModelo(id);
	}
}
