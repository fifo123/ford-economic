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
import { LocalizacaoCarroEntity } from '../localizacao-carro/localizacao-carro.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { CarroSensorEntity } from '../carro-sensor/carro-sensor.entity';

@Entity({
	name: 'Carro',
})
export class CarroEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 255,
	})
	modelo: string;

	@Column({
		type: 'int',
		nullable: false,
	})
	ano: number;

	@Column({
		type: 'varchar',
		length: 7,
		nullable: false,
	})
	placa: string;

	@Column({
		type: 'varchar',
		nullable: false,
		length: 255,
	})
	imagem: string;

	@Column({
		type: 'numeric',
	})
	quilometragem: number;

	@ManyToOne(
		() => UsuarioEntity,
		usuario => usuario.carro,
		{
			onDelete: 'CASCADE',
		},
	)
	usuario: UsuarioEntity;

	@OneToMany(
		() => LocalizacaoCarroEntity,
		localizacao => localizacao.carro,
	)
	localizacao: LocalizacaoCarroEntity[];

	@OneToMany(
		type => CarroSensorEntity,
		carroSensor => carroSensor.carro,
	)
	carroSensor: CarroSensorEntity[];

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
