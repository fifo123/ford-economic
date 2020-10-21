import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

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
}