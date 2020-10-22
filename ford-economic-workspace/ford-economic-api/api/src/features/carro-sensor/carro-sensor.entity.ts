import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarroEntity } from "../carro/carro.entity";
import { SensorEntity } from "../sensor/sensor.entity";

@Entity({
    name:'CarroSensor'
})
export class CarroSensorEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToMany(
        () => CarroEntity,
        carro => carro.CarroSensor,
    )
    carro: CarroEntity[];
       
    @OneToMany(
        () => SensorEntity,
        sensor => sensor.CarroSensor,
    )
    sensor: SensorEntity[];

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}