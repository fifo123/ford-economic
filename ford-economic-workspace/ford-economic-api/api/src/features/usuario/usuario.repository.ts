import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { UsuarioDto } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { ListarUsuarios } from './interface/listar-usuarios.interface';
import { AtualizarUsuarioDto } from "./dto/atualizar-usuario.dto";

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {
    async criarUsuario(data: UsuarioDto): Promise<UsuarioEntity>{
        try {
            const usuarioCriado = this.create(data);
            return this.save(usuarioCriado);
        } catch (err) {
            throw new HttpException(
				'Erro ao salvar Usuario',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async listarUsuarios(): Promise<ListarUsuarios>{
        try {
            const [usuarios, total] = await this.findAndCount({
                relations: ['grupoFamiliar'],
            });
            return {total, usuarios}
        } catch (error) {
            throw new HttpException(
				'Erro ao listar Usuarios',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async listarUsuario(id: number): Promise<UsuarioEntity>{
        try {
            const usuario = await this.findOne(id, {
                relations: ['grupoFamiliar'],
            })
            if(!usuario)
                throw new HttpException(
                    'Não foi encontrado um Usuario com esse ID',
                    HttpStatus.BAD_REQUEST,
                );
            return usuario;
        } catch (error) {
            throw new HttpException(
				'Erro ao listar Usuario',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async atualizarUsuario(id:number, data: AtualizarUsuarioDto): Promise<UsuarioEntity>{
        try {
            this.update(id, data);
            return this.listarUsuario(id);
        } catch (error) {
            throw new HttpException(
				'Erro ao atualizar Usuario',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async deletarUsuario(id:number): Promise<UsuarioEntity>{
        try {
            const usuario = await this.findOne(id);
            this.delete(id);
            return usuario;
        } catch (error) {
            throw new HttpException(
				'Erro ao deletar Usuario',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
}