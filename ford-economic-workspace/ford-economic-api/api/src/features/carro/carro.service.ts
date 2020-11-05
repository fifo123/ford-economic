import { Injectable, Post } from '@nestjs/common';
import { CarroDto } from './dto/carro.dto';
import { CarroRepository } from './carro.repository';
import { CarroEntity } from './carro.entity';
import { AtualizarCarroDto } from './dto/atualizar-carro.dto';
import { ListarCarros } from './interface/listar-carros.interface';

@Injectable()
export class CarroService {
	constructor(private readonly carroRepository: CarroRepository) {}

	async criarCarro(data: CarroDto, imagem: string): Promise<CarroEntity> {
		const carroDto: CarroDto = {
			...data,
			imagem,
		};
		return this.carroRepository.criarCarro(carroDto);
	}

	async listarCarros(): Promise<ListarCarros> {
		return this.carroRepository.listarCarros();
	}

	async listarCarro(id: number): Promise<CarroEntity> {
		return this.carroRepository.listarCarro(id);
	}

	async listarCarroByGrupoFamiliar(id: number): Promise<CarroEntity[]> {
		return this.carroRepository.listarCarroByGrupoFamiliar(id);
	}

	async atualizarCarro(
		id: number,
		data: AtualizarCarroDto,
		filename?: string,
	): Promise<CarroEntity> {
		if (filename) data.imagem = filename;
		console.log(data);
		return this.carroRepository.atualizarCarro(id, data);
	}

	async deletarCarro(id: number): Promise<CarroEntity> {
		return this.carroRepository.deletarCarro(id);
	}
}
