import { Controller, Get, Param } from '@nestjs/common';
import { TipsService } from '../../tips/tips.service';

@Controller('pages/tips')
export class PageTipsController {
	constructor(private readonly tipsService: TipsService) {}

	@Get(':idCarro')
	async getFeatureTips(@Param('idCarro') idCarro: number) {
		return this.tipsService.carTips(idCarro);
	}
}
