import { Controller, Get, Param } from '@nestjs/common';
import { CarroSensorService } from 'src/features/carro-sensor/carro-sensor.service';

@Controller('pages/compare')
export class PageCompareController {
	constructor(private readonly carroSensorService: CarroSensorService) {}

	@Get(':idCarro')
	async getFeatureCompare(@Param('idCarro') idCarro: number) {
		return this.carroSensorService.featureCompare(idCarro);
	}
}
