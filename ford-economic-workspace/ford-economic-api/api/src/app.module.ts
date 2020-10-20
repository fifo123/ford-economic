import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';
import { typeOrmConfig } from './config/typeormConfig.config'
import { UsuarioModule } from './features/usuario/usuario.module';

@Module({
  imports: [GrupoFamiliarModule, TypeOrmModule.forRoot(typeOrmConfig), UsuarioModule],
})
export class AppModule {}
