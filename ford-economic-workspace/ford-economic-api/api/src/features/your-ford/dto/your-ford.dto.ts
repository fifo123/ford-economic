import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { UsuarioEntity } from 'src/features/usuario/usuario.entity';
import { CaracteristicaEntity } from '../caracteristica/caracteristica.entity';
import { ModeloEntity } from '../modelo/modelo.entity';
import { UsoCarroEntity } from '../uso-carro/uso-carro.entity';

export class YourFordDto {
	@IsString({ message: 'O campo  nome precisa ser uma string.' })
	@IsNotEmpty({ message: 'O campo nome é obrigatório.' })
	@Length(0, 255, {
		message: 'O campo nome precisa ter um tamanho de no máximo 255',
	})
	nome: string;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo caracteristicaPrincipal precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo caracteristicaPrincipal é obritatório' })
	caracteristicaPrincipal: CaracteristicaEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo caracteristicaSecundaria1 precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo caracteristicaSecundaria1 é obritatório' })
	caracteristicaSecundaria1: CaracteristicaEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo caracteristicaSecundaria2 precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo caracteristicaSecundaria2 é obritatório' })
	caracteristicaSecundaria2: CaracteristicaEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usoCarro1 precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo usoCarro1 é obritatório' })
	usoCarro1: UsoCarroEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usoCarro2 precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo usoCarro2 é obritatório' })
	usoCarro2: UsoCarroEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo modelo precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo modelo é obritatório' })
	modelo: ModeloEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usuario precisa ser um numero.' },
	)
	@IsNotEmpty({ message: 'O campo usuario é obritatório' })
	usuario: UsuarioEntity;
}
