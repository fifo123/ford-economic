import { UsuarioEntity } from "../usuario.entity";

export interface ListarUsuarios {
    total: number;
    usuarios: UsuarioEntity[]
}