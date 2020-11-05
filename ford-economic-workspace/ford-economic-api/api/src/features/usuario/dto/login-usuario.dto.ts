import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUsuario {
	@IsEmail({}, { message: 'Email inválido' })
	email: string;
	@IsNotEmpty({ message: 'Informe a senha' })
	senha: string;
}
