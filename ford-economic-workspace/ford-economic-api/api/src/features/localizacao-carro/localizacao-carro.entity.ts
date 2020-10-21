import { BaseEntity, Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    /*@OneToOne(
		type => CarroEntity,
		carro => carro.localizacaoCarro,
	)
	carro: CarroEntity;*/

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}