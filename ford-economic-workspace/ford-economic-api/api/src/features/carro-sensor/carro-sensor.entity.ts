import { BaseEntity, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarroEntity } from "../carro/carro.entity";
import { OcorrenciaSensorEntity } from "../ocorrencia-sensor/ocorrencia-sensor.entity";
import { SensorEntity } from "../sensor/sensor.entity";

@Entity({
    name:'CarroSensor'
})
export class CarroSensorEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(
        () => CarroEntity,
        carro => carro.carroSensor,
    )
    carro: CarroEntity;
       
    @ManyToOne(
        () => SensorEntity,
        sensor => sensor.carroSensor,
    )
    sensor: SensorEntity;

    @OneToMany(
		type => OcorrenciaSensorEntity,
		ocorrencia => ocorrencia.carroSensor,
	)
	ocorrenciaSensor: OcorrenciaSensorEntity[];

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}