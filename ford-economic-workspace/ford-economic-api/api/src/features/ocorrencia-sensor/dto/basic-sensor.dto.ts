import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TiposSensorEnum } from './tipos-sensores.enum';

export class BasicSensor {
	@IsString({
		message: 'O tipo do sensor é obrigatório e precisa ser uma string',
	})
	@IsNotEmpty({
		message: 'O tipo do sensor é obrigatório e precisa ser uma string',
	})
	@IsEnum(TiposSensorEnum, {
		message:
			'Precisa ser um tipo válido: ' +
			'Ar-Condicionado, ' +
			'Quilometragem, ' +
			'Combustível, ' +
			'Frenagem, ' +
			'Gases, ' +
			'Motor',
	})
	tipo: TiposSensorEnum;
}
