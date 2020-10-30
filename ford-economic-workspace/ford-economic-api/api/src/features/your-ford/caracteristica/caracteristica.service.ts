import { Injectable } from '@nestjs/common';
import { CaracteristicaEntity } from './caracteristica.entity';
import { CaracteristicaRepository } from './caracteristica.repository';
import { AtualizarCaracteristicaDto } from './dto/atualizar-caracteristica.dto';
import { CaracteristicaDto } from './dto/caracteristica.dto';
import { ListarCaracteristicas } from './interface/listar-caracteristicas.interface';

@Injectable()
export class CaracteristicaService {
	constructor(
		private readonly caracteristicaRepository: CaracteristicaRepository,
	) {}

	async criarCaracteristica(
		data: Partial<CaracteristicaDto>,
		icone: string,
	): Promise<CaracteristicaEntity> {
		const caracteristicaDto: CaracteristicaDto = { nome: data.nome, icone };
		return this.caracteristicaRepository.criarCaracteristica(
			caracteristicaDto,
		);
	}

	async listarCaracteristicas(): Promise<ListarCaracteristicas> {
		return this.caracteristicaRepository.listarCaracteristicas();
	}

	async listarCaracteristica(id: number): Promise<CaracteristicaEntity> {
		return this.caracteristicaRepository.listarCaracteristica(id);
	}

	async atualizarCaracteristica(
		id: number,
		data: AtualizarCaracteristicaDto,
		filename?: string,
	): Promise<CaracteristicaEntity> {
		if (filename) data.icone = filename;
		console.log(data);

		return this.caracteristicaRepository.atualizarCaracteristica(id, data);
	}

	async deletarCaracteristica(id: number): Promise<CaracteristicaEntity> {
		return this.caracteristicaRepository.deletarCaracteristica(id);
	}
}
