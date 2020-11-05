import { GrupoFamiliar } from "./GrupoFamiliar.interface";

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
  numero: string;
  logradouro: string;
  cep: string;
  bairro: string;
  cidade: string;
  uf: string;
  pais: string;
  telefone: string;
  telefone2?: string;
  genero: string;
  atualizado: string;
  criado: string;
  grupoFamiliar: GrupoFamiliar;
}
