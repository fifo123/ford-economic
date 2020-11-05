import { Injectable } from '@nestjs/common';
import { AtualizarTipDto } from './dto/atualizar-tip.dto';
import { TipsDto } from './dto/tips.dto';
import { ListarTips } from './interface/listar-tips.interface';
import { TipsEntity } from './tips.entity';
import { TipsRepository } from './tips.repository';

@Injectable()
export class TipsService {
	constructor(private readonly tipsRepository: TipsRepository) {}

	async criarTip(data: TipsDto): Promise<TipsEntity> {
		return this.tipsRepository.criarTip(data);
	}

	async listarTips(): Promise<ListarTips> {
		return this.tipsRepository.listarTips();
	}

	async listarTip(id: number): Promise<TipsEntity> {
		return this.tipsRepository.listarTip(id);
	}

	async atualizarTip(id: number, data: AtualizarTipDto): Promise<TipsEntity> {
		return this.tipsRepository.atualizarTip(id, data);
	}

	async deletarTip(id: number): Promise<TipsEntity> {
		return this.tipsRepository.deletarTip(id);
	}

	async carTips(idCarro) {
		return this.tipsRepository.carTips(idCarro);
	}
}
