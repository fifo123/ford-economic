import { IsOptional, IsString, Length } from 'class-validator';

export class AtualizarModeloDto {
	@IsOptional()
	@IsString({
		message: 'É necessário passar um campo String para o nome',
	})
	@Length(0, 255)
	nome?: string;

	imagem?: string;
}
