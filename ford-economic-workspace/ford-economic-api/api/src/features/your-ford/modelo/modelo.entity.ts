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
	name: 'Modelo',
})
export class ModeloEntity extends BaseEntity {
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
	imagem: string;

	@OneToMany(
		() => YourFordEntity,
		yourFord => yourFord.modelo,
	)
	yourFord: YourFordEntity[];

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
