import { LocalizacaoCarroEntity } from "../localizacao-carro.entity";

export interface ListarLocalizacaoCarros {
    total: number;
    localizacaoCarro: LocalizacaoCarroEntity[]
}