import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class TipsDto {
	@IsString({ message: 'O campo dicaTemplate precisa ser uma string.' })
	@IsNotEmpty({ message: 'O campo dicaTemplate é obrigatório.' })
	@Length(0, 255, {
		message: 'O campo dicaTemplate precisa ter um tamanho de no máximo 255',
	})
	dicaTemplate: string;

	@IsOptional()
	dicaValores?: string;
}
