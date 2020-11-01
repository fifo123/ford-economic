import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SensorDto {
	@IsString({
		message: 'É necessário passar um campo String para o nome',
	})
	@Length(0, 140)
	@IsNotEmpty({ message: 'O campo nome é obrigatório' })
	nome: string;

	@IsString({
		message: 'É necessário passar um campo String para a descrição',
	})
	@Length(0, 255)
	@IsNotEmpty({ message: 'O campo descrição é obrigatório' })
	descricao: string;

	icone: string;
}
