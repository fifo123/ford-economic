import { IsEmail, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { GrupoFamiliarEntity } from 'src/features/grupo-familiar/grupo-familiar.entity';

export class AtualizarUsuarioDto {
    @IsString({message:'O campo nome precisa ser uma string.'})
    @Length(0,99, {message:'O campo nome precisa ter um tamanho de no máximo 99'})
    @IsOptional()
    nome?: string;

    @IsString({message:'O campo email precisa ser uma string.'})
    @Length(0,99, {message:'O campo email precisa ter um tamanho de no máximo 255'})
    @IsEmail({}, {message:'Precisa ser um email válido'})
    @IsOptional()
    email?: string;

    @IsString({message:'O campo dataNascimento precisa ser uma string. Format: YYYY-MM-DD'})
    @Length(10,10, {message:'O campo dataNascimento precisa ter um tamanho de 10'})
    @IsOptional()
    dataNascimento?: string;

    @IsString({message:'O campo numero precisa ser uma string.'})
    @Length(0,10, {message:'O campo numero precisa ter um tamanho de até 10'})
    @IsOptional()
    numero?: string;

    @IsString({message:'O campo cep precisa ser uma string.'})
    @Length(8,8, {message:'O campo numero precisa ter um tamanho de 8'})
    @IsOptional()
    cep?: string;

    @IsString({message:'O campo logradouro precisa ser uma string.'})
    @Length(0,255, {message:'O campo logradouro precisa ter um tamanho de até 8'})
    @IsOptional()
    logradouro?: string;

    @IsString({message:'O campo bairro precisa ser uma string.'})
    @Length(0,255, {message:'O campo bairro precisa ter um tamanho de até 255'})
    @IsOptional()
    bairro?: string;

    @IsString({message:'O campo cidade precisa ser uma string.'})
    @Length(0,255, {message:'O campo cidade precisa ter um tamanho de até 255'})
    @IsOptional()
    cidade?: string;

    @IsString({message:'O campo uf precisa ser uma string.'})
    @Length(2,2, {message:'O campo uf precisa ter um tamanho de 2'})
    @IsOptional()
    uf?: string;

    @IsString({message:'O campo pais precisa ser uma string.'})
    @Length(0,255, {message:'O campo pais precisa ter um tamanho de até 255'})
    @IsOptional()
    pais?: string;

    @IsString({message:'O campo telefone precisa ser uma string.'})
    @Length(0,20, {message:'O campo telefone precisa ter um tamanho de até 20'})
    @IsOptional()
    telefone?: string;

    @IsString({message:'O campo telefone2 precisa ser uma string.'})
    @Length(0,20, {message:'O campo telefone2 precisa ter um tamanho de até 20'})
    @IsOptional()
    telefone2?: string;

    @IsString({message:'O campo genero precisa ser uma string.'})
    @Length(0,20, {message:'O campo genero precisa ter um tamanho de até 20'})
    @IsOptional()
    genero?: string;

    @IsString({message: 'O campo senha precisa ser uma string.'})
    @Length(8,15, {message: 'Ocampo senha precisa ter um tamanho de 8 até 15'})
    @IsOptional()
    senha?: string;

    @IsString({message: 'O campo fordId precisa ser uma string.'})
    @Length(5,10, {message: 'O campo fordId precisa ter um tamanho de 5 até 10'})
    @IsOptional()
    fordId?: string;

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo grupoFamiliar precisa ser um numero.'})
    @IsOptional()
    grupoFamiliar?: GrupoFamiliarEntity;
}