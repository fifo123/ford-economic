import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:'Carro'
})
export class CarroEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar',
        nullable: false,
        length: 255,
    })
    modelo: string;

    @Column({
        type:'int',
        nullable: false,
    })
    ano: number;

    @Column({
        type:'varchar',
        length: 7,
        nullable: false
    })
    placa: string;
    
    @Column({
        type:'varchar',
        nullable: false,
        length: 255
    })
    imagem: string;
    
    @Column({
        type:'numeric',
    })
    quilometragem: number;

    //@OneToMany(
    //    () => LocalizacaoCarroEntity,
    //    localizacaoCarro => localizacaoCarro.carro,
    //)
    //localizacaoCarro: LocalizacaoCarroEntity;

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}