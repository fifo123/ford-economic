import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';
import { typeOrmConfig } from './config/typeormConfig.config';
import { UsuarioModule } from './features/usuario/usuario.module';
import { SensorModule } from './features/sensor/sensor.module';
import { LocalizacaoCarroModule } from './features/localizacao-carro/localizacao-carro.module';
import { CarroModule } from './features/carro/carro.module';
import { CarroSensorModule } from './features/carro-sensor/carro-sensor.module';
import { OcorrenciaSensorModule } from './features/ocorrencia-sensor/ocorrencia-sensor.module';
import { ModeloModule } from './features/your-ford/modelo/modelo.module';
import { AppController } from './app.controller';
import { CaracteristicaModule } from './features/your-ford/caracteristica/caracteristica.module';
import { UsoCarroModule } from './features/your-ford/uso-carro/uso-carro.module';

@Module({
	imports: [
		GrupoFamiliarModule,
		SensorModule,
		UsuarioModule,
		OcorrenciaSensorModule,
		CarroModule,
		LocalizacaoCarroModule,
		CarroSensorModule,
		TypeOrmModule.forRoot(typeOrmConfig),
		ModeloModule,
		CaracteristicaModule,
		UsoCarroModule,
	],
	controllers: [AppController],
})
export class AppModule {}
