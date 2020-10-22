import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CarroEntity } from "src/features/carro/carro.entity";

export class LocalizacaoCarroDto{
    @IsLatitude({
        message: "É necessário passar um número a latitude"
    })
    @IsNotEmpty({message:"O campo latitude é obrigatório"})
    latitude: number;

    @IsLongitude({
        message: "É necessário passar um número a latitude"
    })
    @IsNotEmpty({message:"O campo latitude é obrigatório"})
    longitude: number;

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo carro precisa ser um numero.'})
    @IsNotEmpty({message: 'O campo carro é obritatório'})
    carro: CarroEntity;
}