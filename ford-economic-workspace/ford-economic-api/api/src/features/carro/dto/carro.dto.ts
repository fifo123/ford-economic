import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Length,
} from 'class-validator';
import { UsuarioEntity } from 'src/features/usuario/usuario.entity';

export class CarroDto {
	@IsString({ message: 'O campo  modelo precisa ser uma string.' })
	@IsNotEmpty({ message: 'O campo modelo é obrigatório.' })
	@Length(0, 255, {
		message: 'O campo modelo precisa ter um tamanho de no máximo 255',
	})
	modelo: string;

	@IsNotEmpty({ message: 'O campo ano é obrigatório.' })
	ano: number;

	@IsNotEmpty({ message: 'O carro precisa de uma placa' })
	@IsString({ message: 'O campo placa precisa ser uma string.' })
	@Length(0, 7, {
		message: 'O campo placa precisa ter um tamanho de no máximo 7',
	})
	placa: string;

	imagem: string;

	@IsOptional()
	quilometragem?: number;

	@IsString({ message: 'O campo  motor precisa ser uma string.' })
	@IsNotEmpty({ message: 'O campo motor é obrigatório.' })
	@Length(0, 255, {
		message: 'O campo motor precisa ter um tamanho de no máximo 255',
	})
	motor: string;

	@IsNotEmpty({ message: 'O campo potencia é obrigatório.' })
	potencia: number;

	@IsNotEmpty({ message: 'O campo cargaBateria é obrigatório.' })
	cargaBateria: number;

	@IsNotEmpty({ message: 'O campo usuario é obritatório' })
	usuario: UsuarioEntity;
}
