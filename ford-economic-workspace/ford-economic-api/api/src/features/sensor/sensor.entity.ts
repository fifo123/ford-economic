import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:'Sensor'
})
export class SensorEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar',
        length: 140
    })
    nome: string;

    @Column({
        type:'varchar',
        length: 255
    })
    descricao: string;

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}