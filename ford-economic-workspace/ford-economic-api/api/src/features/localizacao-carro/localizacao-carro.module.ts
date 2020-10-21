import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalizacaoCarrosController } from './localizacao-carro.controller';
import { LocalizacaoCarroRepository } from './localizacao-carro.repository';
import { LocalizacaoCarroService } from './localizacao-carro.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocalizacaoCarroRepository])],
  controllers: [LocalizacaoCarrosController],
  providers: [LocalizacaoCarroService],
})
export class LocalizacaoCarroModule {}
