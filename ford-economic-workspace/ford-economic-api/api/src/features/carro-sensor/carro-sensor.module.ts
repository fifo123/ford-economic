import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroSensorController } from './carro-sensor.controller';
import { CarroSensorRepository } from './carro-sensor.repository';
import { CarroSensorService } from './carro-sensor.service';

@Module({
  imports:[TypeOrmModule.forFeature([CarroSensorRepository])],
  controllers: [CarroSensorController],
  providers: [CarroSensorService]
})
export class CarroSensorModule {}
