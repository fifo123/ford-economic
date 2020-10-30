import { Injectable } from '@nestjs/common';
import { AtualizarUsoCarroDto } from './dto/atualizar-uso-carro.dto';
import { UsoCarroDto } from './dto/uso-carro.dto';
import { ListarUsosCarro } from './interface/listar-usos-carro.interface';
import { UsoCarroEntity } from './uso-carro.entity';
import { UsoCarroRepository } from './uso-carro.repository';

@Injectable()
export class UsoCarroService {
	constructor(private readonly usoCarroRepository: UsoCarroRepository) {}

	async criarUsoCarro(
		data: Partial<UsoCarroDto>,
		icone: string,
	): Promise<UsoCarroEntity> {
		const usoCarroDto: UsoCarroDto = { nome: data.nome, icone };
		return this.usoCarroRepository.criarUsoCarro(usoCarroDto);
	}

	async listarUsoCarros(): Promise<ListarUsosCarro> {
		return this.usoCarroRepository.listarUsoCarros();
	}

	async listarUsoCarro(id: number): Promise<UsoCarroEntity> {
		return this.usoCarroRepository.listarUsoCarro(id);
	}

	async atualizarUsoCarro(
		id: number,
		data: AtualizarUsoCarroDto,
		filename?: string,
	): Promise<UsoCarroEntity> {
		if (filename) data.icone = filename;
		console.log(data);

		return this.usoCarroRepository.atualizarUsoCarro(id, data);
	}

	async deletarUsoCarro(id: number): Promise<UsoCarroEntity> {
		return this.usoCarroRepository.deletarUsoCarro(id);
	}
}
