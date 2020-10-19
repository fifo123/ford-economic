import { Module } from '@nestjs/common';
import { GrupoFamiliarController } from './grupo-familiar.controller';
import { GrupoFamiliarService } from './grupo-familiar.service';

@Module({
  controllers: [GrupoFamiliarController],
  providers: [GrupoFamiliarService],
})
export class GrupoFamiliarModule {}
