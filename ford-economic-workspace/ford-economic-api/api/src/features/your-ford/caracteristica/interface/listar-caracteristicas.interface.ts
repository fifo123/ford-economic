import { CaracteristicaEntity } from '../caracteristica.entity';

export interface ListarCaracteristicas {
	total: number;
	caracteristicas: CaracteristicaEntity[];
}
