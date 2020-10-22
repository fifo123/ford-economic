import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:'OcorrenciaSensor'
})
export class OcorrenciaSensorEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar',
        length: 255
    })
    valor: string;

    @ManyToOne(
        () => CarroSensorEntity,
        carroSensor => carroSensor.ocorrenciaSensor,
    )
    descricao: string;

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}