import { IsNumber } from 'class-validator';
import { CarroEntity } from 'src/features/carro/carro.entity';
import { SensorEntity } from 'src/features/sensor/sensor.entity';

export class CarroSensorDto {
    
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo sensores precisa ser um numero.'})
    sensor: SensorEntity[];
    
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo carro precisa ser um numero.'})
    carro: CarroEntity[];
   
}