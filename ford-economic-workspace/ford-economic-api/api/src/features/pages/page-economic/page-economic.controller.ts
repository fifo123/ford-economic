import { Controller, Get, Param } from '@nestjs/common';
import { CarroSensorService } from 'src/features/carro-sensor/carro-sensor.service';

@Controller('pages/economic')
export class PageEconomicController {
	constructor(private readonly carroSensorService: CarroSensorService) {}

	@Get(':idCarro')
	async getFeatureEconomic(@Param('idCarro') idCarro: number) {
		return this.carroSensorService.featureEconomic(idCarro);
	}
}
