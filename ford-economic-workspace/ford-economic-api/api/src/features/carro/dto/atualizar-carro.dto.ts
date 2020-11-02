import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { UsuarioEntity } from 'src/features/usuario/usuario.entity';

export class AtualizarCarroDto {
	@IsOptional()
	@IsString({ message: 'O campo  modelo precisa ser uma string.' })
	@Length(0, 255, {
		message: 'O campo modelo precisa ter um tamanho de no máximo 255',
	})
	modelo?: string;

	@IsOptional()
	ano?: number;

	@IsOptional()
	@IsString({ message: 'O campo placa precisa ser uma string.' })
	@Length(0, 7, {
		message: 'O campo placa precisa ter um tamanho de no máximo 7',
	})
	placa?: string;

	imagem?: string;

	@IsOptional()
	quilometragem?: number;

	@IsString({ message: 'O campo  motor precisa ser uma string.' })
	@Length(0, 255, {
		message: 'O campo motor precisa ter um tamanho de no máximo 255',
	})
	@IsOptional()
	motor?: string;

	@IsOptional()
	potencia?: number;

	@IsOptional()
	cargaBateria?: number;

	@IsOptional()
	usuario: UsuarioEntity;
}
