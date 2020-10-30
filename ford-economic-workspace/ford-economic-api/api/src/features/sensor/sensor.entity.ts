import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CarroSensorEntity } from '../carro-sensor/carro-sensor.entity';

@Entity({
	name: 'Sensor',
})
export class SensorEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'varchar',
		length: 140,
	})
	nome: string;

	@Column({
		type: 'varchar',
		length: 255,
	})
	descricao: string;

	@OneToMany(
		type => CarroSensorEntity,
		carroSensor => carroSensor.carro,
		{
			cascade: true,
		},
	)
	carroSensor: CarroSensorEntity[];

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
