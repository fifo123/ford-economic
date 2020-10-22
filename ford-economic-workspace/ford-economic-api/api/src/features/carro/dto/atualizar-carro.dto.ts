import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { UsuarioEntity } from 'src/features/usuario/usuario.entity';

export class AtualizarCarroDto {
    
    @IsOptional()
    @IsString({message:'O campo  modelo precisa ser uma string.'})
    @Length(0,255, {message:'O campo modelo precisa ter um tamanho de no máximo 255'})
    modelo?: string;

    @IsOptional()
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo ano precisa ser um número.'})
    ano?: number;

    @IsOptional()
    @IsString({message:'O campo placa precisa ser uma string.'})
    @Length(0,7, {message: 'O campo placa precisa ter um tamanho de no máximo 7' })
    placa?: string;

    @IsOptional()
    @IsString({message:'O campo  imagem precisa ser uma string, que indica o caminho onde está a imagem.'})
    @Length(0,255, {message:'O campo imagem precisa ter um tamanho de no máximo 255'})
    imagem?: string;

    @IsOptional()
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo quilometragem precisa ser um número.'})
    quilometragem?: number;
   
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo usuario precisa ser um numero.'})
    @IsOptional()
    usuario: UsuarioEntity;
}