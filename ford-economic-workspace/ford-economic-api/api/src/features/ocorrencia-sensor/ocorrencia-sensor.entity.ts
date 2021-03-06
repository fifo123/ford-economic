import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CarroSensorEntity } from '../carro-sensor/carro-sensor.entity';

@Entity({
	name: 'OcorrenciaSensor',
})
export class OcorrenciaSensorEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({
		type: 'jsonb',
		nullable: true,
	})
	valor?: any;

	@ManyToOne(
		() => CarroSensorEntity,
		carroSensor => carroSensor.ocorrenciaSensor,
		{
			onDelete: 'CASCADE',
		},
	)
	carroSensor: CarroSensorEntity;

	@UpdateDateColumn()
	atualizado: Date;
	@CreateDateColumn()
	criado: Date;
}
