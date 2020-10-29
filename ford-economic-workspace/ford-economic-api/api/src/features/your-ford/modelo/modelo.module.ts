import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloController } from './modelo.controller';
import { ModeloRepository } from './modelo.repository';
import { ModeloService } from './modelo.service';

@Module({
	imports: [TypeOrmModule.forFeature([ModeloRepository])],
	controllers: [ModeloController],
	providers: [ModeloService],
})
export class ModeloModule {}
