import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "../usuario/usuario.entity";

@Entity({
    name:'GrupoFamiliar'
})
export class GrupoFamiliarEntity extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type:'varchar',
        length: 255
    })
    nome: string;

    @OneToMany(
		type => UsuarioEntity,
		usuario => usuario.grupoFamiliar,
	)
	usuarios: UsuarioEntity[];

    @UpdateDateColumn()
    atualizado: Date;
    @CreateDateColumn()
    criado: Date;
}