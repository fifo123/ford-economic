import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Length,
} from 'class-validator';
import { UsuarioEntity } from 'src/features/usuario/usuario.entity';
import { CaracteristicaEntity } from '../caracteristica/caracteristica.entity';
import { ModeloEntity } from '../modelo/modelo.entity';
import { UsoCarroEntity } from '../uso-carro/uso-carro.entity';

export class AtualizarYourFordDto {
	@IsString({ message: 'O campo  nome precisa ser uma string.' })
	@IsOptional()
	@Length(0, 255, {
		message: 'O campo nome precisa ter um tamanho de no máximo 255',
	})
	nome?: string;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo caracteristicaPrincipal precisa ser um numero.' },
	)
	@IsOptional()
	caracteristicaPrincipal?: CaracteristicaEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo caracteristicaSecundaria1 precisa ser um numero.' },
	)
	@IsOptional()
	caracteristicaSecundaria1?: CaracteristicaEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo caracteristicaSecundaria2 precisa ser um numero.' },
	)
	@IsOptional()
	caracteristicaSecundaria2?: CaracteristicaEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usoCarro1 precisa ser um numero.' },
	)
	@IsOptional()
	usoCarro1?: UsoCarroEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usoCarro2 precisa ser um numero.' },
	)
	@IsOptional()
	usoCarro2?: UsoCarroEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo modelo precisa ser um numero.' },
	)
	@IsOptional()
	modelo?: ModeloEntity;
	@IsNumber(
		{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
		{ message: 'O campo usuario precisa ser um numero.' },
	)
	@IsOptional()
	usuario?: UsuarioEntity;
}
