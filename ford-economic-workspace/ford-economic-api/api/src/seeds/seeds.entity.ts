import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({
	name: 'Seeds',
})
export class Seed extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		length: 255,
		nullable: false,
	})
	seed: string;

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
