import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CarroEntity } from '../carro/carro.entity';
import { GrupoFamiliarEntity } from '../grupo-familiar/grupo-familiar.entity';
import { YourFordEntity } from '../your-ford/your-ford.entity';

@Entity({
	name: 'Usuario',
})
export class UsuarioEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		length: 100,
	})
	nome: string;

	@Column({
		type: 'varchar',
		length: 100,
		unique: true,
	})
	email: string;

	@Column({
		type: 'date',
		nullable: false,
	})
	dataNascimento: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 10,
	})
	numero: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 255,
	})
	logradouro: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 8,
	})
	cep: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 255,
	})
	bairro: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 255,
	})
	cidade: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 2,
	})
	uf: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 255,
	})
	pais: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 20,
	})
	telefone: string;

	@Column({
		type: 'varchar',
		nullable: true,
		length: 20,
	})
	telefone2: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 20,
	})
	genero: string;

	@ManyToOne(
		() => GrupoFamiliarEntity,
		grupoFamiliar => grupoFamiliar.usuarios,
		{
			onDelete: 'CASCADE',
		},
	)
	grupoFamiliar: GrupoFamiliarEntity;

	@OneToMany(
		() => CarroEntity,
		carro => carro.usuario,
	)
	carro: CarroEntity[];

	@OneToMany(
		() => YourFordEntity,
		yourFord => yourFord.usuario,
	)
	yourFord: YourFordEntity[];

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
