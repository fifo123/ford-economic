import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { UsuarioEntity } from 'src/features/usuario/usuario.entity';

export class AtualizarOcorrenciaSensorDto {
    
    @IsOptional()
    @IsString({message:'O campo  valor precisa ser uma string.'})
    @Length(0,255, {message:'O campo valor precisa ter um tamanho de no máximo 255'})
    valor: string;

    @IsOptional()
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo usuario precisa ser um numero.'})
    carroSensor: CarroSensorEntity;
}