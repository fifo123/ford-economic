import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CarroSensorEntity } from 'src/features/carro-sensor/carro-sensor.entity';

export class OcorrenciaSensorDto {
    
    @IsOptional()
    valor: Object;

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo carroSensor precisa ser um numero.'})
    @IsNotEmpty({message: 'O campo carroSensor é obritatório'})
    carroSensor: CarroSensorEntity;
}