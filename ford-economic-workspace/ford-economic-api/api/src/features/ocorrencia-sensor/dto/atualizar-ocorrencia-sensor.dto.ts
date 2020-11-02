import { IsNumber, IsOptional } from 'class-validator';
import { CarroSensorEntity } from 'src/features/carro-sensor/carro-sensor.entity';

export class AtualizarOcorrenciaSensorDto {
	@IsOptional()
	valor?: any;

	@IsOptional()
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usuario precisa ser um numero.' },
	)
	carroSensor?: CarroSensorEntity;
}
