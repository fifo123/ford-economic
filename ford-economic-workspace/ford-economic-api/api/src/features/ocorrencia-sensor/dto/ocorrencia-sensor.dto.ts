import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	ValidateNested,
} from 'class-validator';
import { CarroSensorEntity } from 'src/features/carro-sensor/carro-sensor.entity';
import { ArCondicionadoDto } from './sensor-ar-condicionado.dto';
import { QuilometragemDto } from './sensor-quilometragem.dto';

export class OcorrenciaSensorDto {
	@ValidateNested({
		each: true,
	})
	@IsNotEmpty()
	valor: any;

	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo carroSensor precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo carroSensor é obritatório' })
	carroSensor: CarroSensorEntity;
}
