import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarroEntity } from "../carro/carro.entity";

@Entity({
    name:'LocalizacaoCarro'
})
export class LocalizacaoCarroEntity extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'numeric'
    })
    latitude: number;

    @Column({
        type:'numeric'
    })
    longitude: number;

    @ManyToOne(
        () => CarroEntity,
        carro => carro.localizacao,
    )
    carro: CarroEntity;

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}