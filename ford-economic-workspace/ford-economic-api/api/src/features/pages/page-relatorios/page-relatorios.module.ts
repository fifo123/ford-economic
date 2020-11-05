import { Module } from '@nestjs/common';
import { CarroSensorModule } from 'src/features/carro-sensor/carro-sensor.module';
import { PageRelatoriosController } from './page-relatorios.controller';
@Module({
	controllers: [PageRelatoriosController],
	imports: [CarroSensorModule],
})
export class PageRelatoriosModule {}
