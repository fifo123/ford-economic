import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	Length,
} from 'class-validator';

export class AtualizarTipDto {
	@IsOptional()
	@IsString({ message: 'O campo dicaTemplate precisa ser uma string.' })
	@Length(0, 255, {
		message: 'O campo dicaTemplate precisa ter um tamanho de no máximo 255',
	})
	dicaTemplate?: string;

	@IsOptional()
	dicaValores?: string;
}
