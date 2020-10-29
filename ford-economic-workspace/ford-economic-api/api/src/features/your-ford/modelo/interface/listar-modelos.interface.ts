import { ModeloEntity } from '../modelo.entity';

export interface ListarModelos {
	total: number;
	modelos: ModeloEntity[];
}
