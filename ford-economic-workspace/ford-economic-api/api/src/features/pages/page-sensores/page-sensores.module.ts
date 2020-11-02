import { Module } from '@nestjs/common';
import { CarroSensorModule } from 'src/features/carro-sensor/carro-sensor.module';
import { PageSensoresController } from './page-sensores.controller';

@Module({
	controllers: [PageSensoresController],
	imports: [CarroSensorModule],
})
export class PageSensoresModule {}
