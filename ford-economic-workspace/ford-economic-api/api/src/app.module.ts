import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';
import { typeOrmConfig } from './config/typeormConfig.config'

@Module({
  imports: [GrupoFamiliarModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
