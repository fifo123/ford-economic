import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { GrupoFamiliarDto } from "./dto/grupo-familiar.dto";
import { GrupoFamiliarEntity } from "./grupoFamiliar.entity";

@EntityRepository(GrupoFamiliarEntity)
export class GrupoFamiliarRepository extends Repository<GrupoFamiliarEntity> {
    async criarGrupoFamiliar(data: GrupoFamiliarDto): Promise<GrupoFamiliarEntity>{
        try {
            const grupoFamiliar = this.create(data);
            return this.save(grupoFamiliar);
        } catch (error) {
            throw new HttpException(
				'Erro ao salvar grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
}