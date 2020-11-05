import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	ValidationPipe,
} from '@nestjs/common';
import { AtualizarTipDto } from './dto/atualizar-tip.dto';
import { TipsDto } from './dto/tips.dto';
import { TipsService } from './tips.service';

@Controller('tips')
export class TipsController {
	constructor(private readonly tipsService: TipsService) {}

	@Post('/criar')
	async criarTip(@Body(ValidationPipe) data: TipsDto) {
		return this.tipsService.criarTip(data);
	}

	@Get('')
	async listarTips() {
		return this.tipsService.listarTips();
	}

	@Get('/:id')
	async listarTip(@Param('id') id: number) {
		return this.tipsService.listarTip(id);
	}

	@Patch('/atualizar/:id')
	async atualizarTip(
		@Param('id') id: number,
		@Body(ValidationPipe) data: AtualizarTipDto,
	) {
		return this.tipsService.atualizarTip(id, data);
	}

	@Delete('/deletar/:id')
	async deletarTip(@Param('id') id: number) {
		return this.tipsService.deletarTip(id);
	}
}
