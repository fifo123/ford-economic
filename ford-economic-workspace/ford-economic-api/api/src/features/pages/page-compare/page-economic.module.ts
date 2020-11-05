import { Module } from '@nestjs/common';
import { CarroSensorModule } from 'src/features/carro-sensor/carro-sensor.module';
import { PageCompareController } from './page-economic.controller';

@Module({
	controllers: [PageCompareController],
	imports: [CarroSensorModule],
})
export class PageCompareModule {}
