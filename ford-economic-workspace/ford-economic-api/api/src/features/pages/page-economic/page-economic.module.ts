import { Module } from '@nestjs/common';
import { CarroSensorModule } from 'src/features/carro-sensor/carro-sensor.module';
import { PageEconomicController } from './page-economic.controller';

@Module({
	controllers: [PageEconomicController],
	imports: [CarroSensorModule],
})
export class PageEconomicModule {}
