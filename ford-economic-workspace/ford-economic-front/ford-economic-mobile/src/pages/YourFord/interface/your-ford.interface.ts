export interface YourFord {
  id?: number;
  nome?: string;
  atualizado?: string;
  criado?: string;
  caracteristicaPrincipal?: {
    id?: number;
    nome?: string;
    icone?: string;
    atualizado?: string;
    criado?: string;
  };
  caracteristicaSecundaria1?: {
    id?: number;
    nome?: string;
    icone?: string;
    atualizado?: string;
    criado?: string;
  };
  caracteristicaSecundaria2?: {
    id?: number;
    nome?: string;
    icone?: string;
    atualizado?: string;
    criado?: string;
  };
  usoCarro1?: {
    id?: number;
    nome?: string;
    icone?: string;
    atualizado?: string;
    criado?: string;
  };
  usoCarro2?: {
    id?: number;
    nome?: string;
    icone?: string;
    atualizado?: string;
    criado?: string;
  };
  modelo?: {
    id?: number;
    nome?: string;
    imagem?: string;
    atualizado?: string;
    criado?: string;
  };
  usuario?: {
    id?: number;
    nome?: string;
    email?: string;
    dataNascimento?: string;
    numero?: string;
    logradouro?: string;
    cep?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
    pais?: string;
    telefone?: string;
    telefone2?: null;
    genero?: string;
    atualizado?: string;
    criado?: string;
  };
}
