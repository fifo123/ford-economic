import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';
import { typeOrmConfig } from './config/typeormConfig.config'
import { UsuarioModule } from './features/usuario/usuario.module';
import { SensorModule } from './features/sensor/sensor.module';


@Module({
  imports: [GrupoFamiliarModule, SensorModule, UsuarioModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
