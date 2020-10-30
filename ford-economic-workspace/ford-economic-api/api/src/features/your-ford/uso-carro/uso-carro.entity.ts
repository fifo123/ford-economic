import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { YourFordEntity } from '../your-ford.entity';

@Entity({
	name: 'UsoCarro',
})
export class UsoCarroEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		length: 255,
		nullable: false,
	})
	nome: string;

	@Column({
		type: 'varchar',
		length: 255,
		nullable: false,
	})
	icone: string;

	@OneToMany(
		() => YourFordEntity,
		yourFord => yourFord.usoCarro1,
	)
	yourFord: YourFordEntity[];

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
