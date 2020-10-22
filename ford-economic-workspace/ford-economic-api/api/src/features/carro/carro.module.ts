import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroRepository } from './carro.repository';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';

@Module({
  imports:[TypeOrmModule.forFeature([CarroRepository])],
  controllers: [CarroController],
  providers: [CarroService]
})
export class CarroModule {}
