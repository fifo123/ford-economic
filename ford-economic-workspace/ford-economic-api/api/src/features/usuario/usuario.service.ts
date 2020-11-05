import { Injectable, Post } from '@nestjs/common';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import { LoginUsuario } from './dto/login-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { ListarUsuarios } from './interface/listar-usuarios.interface';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
	constructor(private readonly usuarioRepository: UsuarioRepository) {}

	async criarUsuario(data: UsuarioDto): Promise<UsuarioEntity> {
		return this.usuarioRepository.criarUsuario(data);
	}

	async logarUsuario(data: LoginUsuario): Promise<UsuarioEntity> {
		return this.usuarioRepository.loginUsuario(data);
	}

	async listarUsuarios(): Promise<ListarUsuarios> {
		return this.usuarioRepository.listarUsuarios();
	}

	async listarUsuario(id: number): Promise<UsuarioEntity> {
		return this.usuarioRepository.listarUsuario(id);
	}

	async atualizarUsuario(
		id: number,
		data: AtualizarUsuarioDto,
	): Promise<UsuarioEntity> {
		return this.usuarioRepository.atualizarUsuario(id, data);
	}

	async deletarUsuario(id: number): Promise<UsuarioEntity> {
		return this.usuarioRepository.deletarUsuario(id);
	}
}
