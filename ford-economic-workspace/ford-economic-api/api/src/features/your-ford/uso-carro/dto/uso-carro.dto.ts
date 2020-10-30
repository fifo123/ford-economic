import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UsoCarroDto {
	@IsString({
		message: 'É necessário passar um campo String para o nome',
	})
	@Length(0, 255)
	@IsNotEmpty({ message: 'O campo nome é obrigatório' })
	nome: string;

	icone: string;
}
