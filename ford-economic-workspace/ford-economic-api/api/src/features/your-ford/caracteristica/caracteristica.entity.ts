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
	name: 'Caracteristica',
})
export class CaracteristicaEntity extends BaseEntity {
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
		yourFord => yourFord.caracteristicaPrincipal,
	)
	yourFord: YourFordEntity[];

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
