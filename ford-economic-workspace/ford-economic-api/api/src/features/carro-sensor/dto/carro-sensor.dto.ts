import { IsNotEmpty, IsNumber } from 'class-validator';
import { CarroEntity } from 'src/features/carro/carro.entity';
import { SensorEntity } from 'src/features/sensor/sensor.entity';

export class CarroSensorDto {
    
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo sensor precisa ser um numero.'})
    @IsNotEmpty({message:'O campo sensor é obrigatório'})
    sensor: SensorEntity;
    
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo carro precisa ser um numero.'})
    @IsNotEmpty({message:'O campo carro é obrigatório'})
    carro: CarroEntity;
   
}