import { Module } from '@nestjs/common';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';

@Module({
  imports: [GrupoFamiliarModule],
})
export class AppModule {}
