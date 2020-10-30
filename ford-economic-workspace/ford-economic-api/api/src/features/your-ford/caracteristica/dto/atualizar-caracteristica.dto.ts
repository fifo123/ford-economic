import { IsOptional, IsString, Length } from 'class-validator';

export class AtualizarCaracteristicaDto {
	@IsOptional()
	@IsString({
		message: 'É necessário passar um campo String para o nome',
	})
	@Length(0, 255)
	nome?: string;

	icone?: string;
}
