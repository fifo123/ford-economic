import { IsOptional, IsString, Length } from 'class-validator';

export class AtualizarSensorDto {
	@IsOptional()
	@IsString({
		message: 'É necessário passar um campo String para o nome',
	})
	@Length(0, 140)
	nome?: string;

	@IsOptional()
	@IsString({
		message: 'É necessário passar um campo String para a descrição',
	})
	@Length(0, 255)
	descricao?: string;

	icone: string;
}
