import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { CaracteristicaEntity } from './caracteristica/caracteristica.entity';
import { ModeloEntity } from './modelo/modelo.entity';
import { UsoCarroEntity } from './uso-carro/uso-carro.entity';

@Entity({
	name: 'YourFord',
})
export class YourFordEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		length: 255,
		nullable: false,
	})
	nome: string;

	@ManyToOne(
		() => CaracteristicaEntity,
		caracteristicaPrincipal => caracteristicaPrincipal.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	caracteristicaPrincipal: CaracteristicaEntity;

	@ManyToOne(
		() => CaracteristicaEntity,
		caracteristicaSecundaria1 => caracteristicaSecundaria1.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	caracteristicaSecundaria1: CaracteristicaEntity;

	@ManyToOne(
		() => CaracteristicaEntity,
		caracteristicaSecundaria2 => caracteristicaSecundaria2.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	caracteristicaSecundaria2: CaracteristicaEntity;

	@ManyToOne(
		() => UsoCarroEntity,
		usoCarro1 => usoCarro1.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	usoCarro1: UsoCarroEntity;

	@ManyToOne(
		() => UsoCarroEntity,
		usoCarro2 => usoCarro2.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	usoCarro2: UsoCarroEntity;

	@ManyToOne(
		() => ModeloEntity,
		modelo => modelo.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	modelo: ModeloEntity;

	@ManyToOne(
		() => UsuarioEntity,
		usuario => usuario.yourFord,
		{
			onDelete: 'CASCADE',
		},
	)
	usuario: UsuarioEntity;

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
