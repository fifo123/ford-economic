import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoFamiliarModule } from './features/grupo-familiar/grupo-familiar.module';
import { typeOrmConfig } from './config/typeormConfig.config';
import { UsuarioModule } from './features/usuario/usuario.module';
import { SensorModule } from './features/sensor/sensor.module';
import { LocalizacaoCarroModule } from './features/localizacao-carro/localizacao-carro.module';
import { CarroModule } from './features/carro/carro.module';
import { CarroSensorModule } from './features/carro-sensor/carro-sensor.module';
import { OcorrenciaSensorModule } from './features/ocorrencia-sensor/ocorrencia-sensor.module';
import { AppController } from './app.controller';
import { CaracteristicaModule } from './features/your-ford/caracteristica/caracteristica.module';
import { YourFordModule } from './features/your-ford/your-ford.module';
import { seed } from './seeds';
import { UsoCarroModule } from './features/your-ford/uso-carro/uso-carro.module';
import { ModeloModule } from './features/your-ford/modelo/modelo.module';
import { PageSensoresModule } from './features/pages/page-sensores/page-sensores.module';
import { PageEconomicModule } from './features/pages/page-economic/page-economic.module';
import { PageCompareModule } from './features/pages/page-compare/page-economic.module';
import { PageRelatoriosModule } from './features/pages/page-relatorios/page-relatorios.module';
import { PageTipsModule } from './features/pages/page-tips/page-tips.module';
import { TipsModule } from './features/tips/tips.module';

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
		YourFordModule,
		PageSensoresModule,
		PageEconomicModule,
		PageCompareModule,
		PageRelatoriosModule,
		TipsModule,
		PageTipsModule,
	],
	controllers: [AppController],
})
export class AppModule implements OnModuleInit {
	async onModuleInit() {
		await seed();
	}
}
