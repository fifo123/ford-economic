import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OcorrenciaSensorController } from './ocorrencia-sensor.controller';
import { OcorrenciaSensorRepository } from './ocorrencia-sensor.repository';
import { OcorrenciaSensorService } from './ocorrencia-sensor.service';

@Module({
  imports: [TypeOrmModule.forFeature([OcorrenciaSensorRepository])],
  controllers: [OcorrenciaSensorController],
  providers: [OcorrenciaSensorService],
})
export class OcorrenciaSensorModule {}