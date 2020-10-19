import { Injectable } from '@nestjs/common';
import { GrupoFamiliarDto } from './dto/grupo-familiar.dto';
import { GrupoFamiliarRepository } from './grupo-familiart.repository';
import { GrupoFamiliarEntity } from './grupoFamiliar.entity';

@Injectable()
export class GrupoFamiliarService {
    constructor(private readonly grupoFamiliarRepository: GrupoFamiliarRepository){}

    async criarGrupoFamiliar(data: GrupoFamiliarDto): Promise<GrupoFamiliarEntity>{
        return this.grupoFamiliarRepository.criarGrupoFamiliar(data);
    }
}
