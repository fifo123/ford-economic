import { CarroEntity } from "../carro.entity";

export interface ListarCarros {
    total: number;
    carros: CarroEntity[]
}