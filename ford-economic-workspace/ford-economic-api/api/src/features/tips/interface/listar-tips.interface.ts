import { TipsEntity } from '../tips.entity';

export interface ListarTips {
	total: number;
	tips: TipsEntity[];
}
