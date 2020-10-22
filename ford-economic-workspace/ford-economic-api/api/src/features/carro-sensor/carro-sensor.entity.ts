import { BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarroEntity } from "../carro/carro.entity";
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

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}