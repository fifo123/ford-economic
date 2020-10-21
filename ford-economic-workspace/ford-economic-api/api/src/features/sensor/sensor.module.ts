import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorController } from './sensor.controller';
import { SensorRepository } from './sensor.repository';
import { SensorService } from './sensor.service';

@Module({
  imports: [TypeOrmModule.forFeature([SensorRepository])],
  controllers: [SensorController],
  providers: [SensorService],
})
export class SensorModule {}