import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

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

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
