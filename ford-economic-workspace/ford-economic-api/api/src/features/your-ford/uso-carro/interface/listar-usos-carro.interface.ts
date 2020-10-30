import { UsoCarroEntity } from '../uso-carro.entity';

export interface ListarUsosCarro {
	total: number;
	usoCarros: UsoCarroEntity[];
}
