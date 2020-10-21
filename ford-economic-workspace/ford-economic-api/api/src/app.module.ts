import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';
import { typeOrmConfig } from './config/typeormConfig.config'
import { UsuarioModule } from './features/usuario/usuario.module';
import { SensorModule } from './features/sensor/sensor.module';
import { LocalizacaoCarroModule } from './features/localizacao-carro/localizacao-carro.module';


@Module({
  imports: [GrupoFamiliarModule, SensorModule, UsuarioModule, LocalizacaoCarroModule,TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
