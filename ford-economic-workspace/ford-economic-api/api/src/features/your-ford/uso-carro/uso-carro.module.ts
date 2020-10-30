import { Module } from '@nestjs/common';
import { UsoCarroService } from './uso-carro.service';
import { UsoCarroController } from './uso-carro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsoCarroRepository } from './uso-carro.repository';

@Module({
	imports: [TypeOrmModule.forFeature([UsoCarroRepository])],
	providers: [UsoCarroService],
	controllers: [UsoCarroController],
})
export class UsoCarroModule {}
