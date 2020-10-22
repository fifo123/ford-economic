import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarController } from './grupo-familiar.controller';
import { GrupoFamiliarService } from './grupo-familiar.service';
import {GrupoFamiliarRepository} from './grupo-familiar.repository'
@Module({
  imports: [TypeOrmModule.forFeature([GrupoFamiliarRepository])],
  controllers: [GrupoFamiliarController],
  providers: [GrupoFamiliarService],
})
export class GrupoFamiliarModule {}
