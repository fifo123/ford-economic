import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { GrupoFamiliarEntity } from 'src/features/grupo-familiar/grupo-familiar.entity';

export class UsuarioDto {
    @IsString({message:'O campo nome precisa ser uma string.'})
    @IsNotEmpty({message: 'O campo nome é obrigatório.'})
    @Length(0,99, {message:'O campo nome precisa ter um tamanho de no máximo 99'})
    nome: string;

    @IsString({message:'O campo email precisa ser uma string.'})
    @IsNotEmpty({message: 'O campo email é obrigatório.'})
    @Length(0,99, {message:'O campo email precisa ter um tamanho de no máximo 255'})
    @IsEmail({}, {message:'Precisa ser um email válido'})
    email: string;

    @IsString({message:'O campo dataNascimento precisa ser uma string. Format: YYYY-MM-DD'})
    @Length(10,10, {message:'O campo dataNascimento precisa ter um tamanho de 10'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    dataNascimento: string;

    @IsString({message:'O campo numero precisa ser uma string.'})
    @Length(0,10, {message:'O campo numero precisa ter um tamanho de até 10'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    numero: string;

    @IsString({message:'O campo cep precisa ser uma string.'})
    @IsNotEmpty({message: 'O campo cep é obrigatório.'})
    @Length(8,8, {message:'O campo numero precisa ter um tamanho de 8'})
    cep: string;

    @IsString({message:'O campo logradouro precisa ser uma string.'})
    @Length(0,255, {message:'O campo logradouro precisa ter um tamanho de até 8'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    logradouro: string;

    @IsString({message:'O campo bairro precisa ser uma string.'})
    @Length(0,255, {message:'O campo bairro precisa ter um tamanho de até 255'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    bairro: string;

    @IsString({message:'O campo cidade precisa ser uma string.'})
    @Length(0,255, {message:'O campo cidade precisa ter um tamanho de até 255'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    cidade: string;

    @IsString({message:'O campo uf precisa ser uma string.'})
    @Length(2,2, {message:'O campo uf precisa ter um tamanho de 2'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    uf: string;

    @IsString({message:'O campo pais precisa ser uma string.'})
    @Length(0,255, {message:'O campo pais precisa ter um tamanho de até 255'})
    @IsNotEmpty({message: 'O campo dataNascimento é obrigatório.'})
    pais: string;

    @IsString({message:'O campo telefone precisa ser uma string.'})
    @IsNotEmpty({message: 'O campo telefone é obrigatório.'})
    @Length(0,20, {message:'O campo telefone precisa ter um tamanho de até 20'})
    telefone: string;

    @IsString({message:'O campo telefone2 precisa ser uma string.'})
    @Length(0,20, {message:'O campo telefone2 precisa ter um tamanho de até 20'})
    @IsOptional()
    telefone2: string;

    @IsString({message:'O campo genero precisa ser uma string.'})
    @Length(0,20, {message:'O campo genero precisa ter um tamanho de até 20'})
    @IsNotEmpty({message: 'O campo genero é obrigatório.'})
    genero: string;

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces:0}, {message:'O campo grupoFamiliar precisa ser um numero.'})
    grupoFamiliar: GrupoFamiliarEntity;
}