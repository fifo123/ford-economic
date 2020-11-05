import { Controller, Get, Param } from '@nestjs/common';
import { CarroSensorService } from 'src/features/carro-sensor/carro-sensor.service';

@Controller('pages/relatorios')
export class PageRelatoriosController {
	constructor(private readonly carroSensorService: CarroSensorService) {}

	@Get(':idCarro')
	async getRelatoriosSensores(@Param('idCarro') idCarro: number) {
		console.log(idCarro);
		return this.carroSensorService.featureRelatorios(idCarro);
	}
	@Get(':idCarro/:idSensor')
	async getRelatoriosSensoresMes(
		@Param('idCarro') idCarro: number,
		@Param('idSensor') idSensor: number,
	) {
		console.log(idCarro);
		return this.carroSensorService.featureRelatoriosSensorMes(
			idCarro,
			idSensor,
		);
	}
}
