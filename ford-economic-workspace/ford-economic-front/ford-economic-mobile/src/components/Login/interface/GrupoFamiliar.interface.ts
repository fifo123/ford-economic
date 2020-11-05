import { Usuario } from "./usuario.interface";

export interface GrupoFamiliar {
  id: number;
  nome: string;
  usuarios: Usuario[];
  atualizado: Date;
  criado: Date;
}
