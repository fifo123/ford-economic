import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString } from "class-validator";

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
}