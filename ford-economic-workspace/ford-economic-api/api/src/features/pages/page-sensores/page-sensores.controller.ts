import { Controller, Get, Param } from '@nestjs/common';
import { CarroSensorService } from 'src/features/carro-sensor/carro-sensor.service';

@Controller('pages/sensores')
export class PageSensoresController {
	constructor(private readonly carroSensorService: CarroSensorService) {}

	@Get(':idCarro')
	async getFeatureSensores(@Param('idCarro') idCarro: number) {
		return this.carroSensorService.featureSensores(idCarro);
	}
}
