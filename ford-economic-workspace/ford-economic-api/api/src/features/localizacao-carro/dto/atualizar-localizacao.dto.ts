import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { CarroEntity } from "src/features/carro/carro.entity";

export class AtualizarLocalizacaoDto{
        
    @IsOptional()
    @IsLatitude({
        message: "É necessário passar um número a latitude"
    })
    latitude: number;

    @IsOptional()
    @IsLongitude({
        message: "É necessário passar um número a latitude"
    })
    longitude: number;

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo carro precisa ser um numero.'})
    @IsOptional()
    carro: CarroEntity;
}