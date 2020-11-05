import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CarroEntity } from '../carro/carro.entity';

@Entity({
	name: 'Tips',
})
export class TipsEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		length: 255,
	})
	dicaTemplate: string;

	@Column({
		type: 'jsonb',
		nullable: true,
	})
	dicaValores?: string;

	@ManyToOne(
		type => CarroEntity,
		carro => carro.tips,
	)
	carro: CarroEntity;

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
