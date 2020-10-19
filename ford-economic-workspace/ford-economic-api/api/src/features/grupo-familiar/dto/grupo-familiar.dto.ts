import { IsNotEmpty, IsString } from "class-validator";

export class GrupoFamiliarDto{
    @IsString({
        message: "É necessário passar um campo String para o nome"
    })
    @IsNotEmpty({message:"O campo nome é obrigatório"})
    nome: string;
}