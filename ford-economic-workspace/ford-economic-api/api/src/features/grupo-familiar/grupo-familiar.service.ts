import { Injectable } from '@nestjs/common';
import { GrupoFamiliarDto } from './dto/grupo-familiar.dto';
import { GrupoFamiliarRepository } from './grupo-familiart.repository';
import { GrupoFamiliarEntity } from './grupoFamiliar.entity';
import { ListarGruposFamiliares } from './interface/listar-grupos-familiares.interface';

@Injectable()
export class GrupoFamiliarService {
    constructor(private readonly grupoFamiliarRepository: GrupoFamiliarRepository){}

    async criarGrupoFamiliar(data: GrupoFamiliarDto): Promise<GrupoFamiliarEntity>{
        return this.grupoFamiliarRepository.criarGrupoFamiliar(data);
    }

    async listarGruposFamiliares(): Promise<ListarGruposFamiliares>{
        return this.grupoFamiliarRepository.listarGruposFamiliares();
    }

    async listarGrupoFamiliar(id: number): Promise<GrupoFamiliarEntity>{
        return this.grupoFamiliarRepository.listarGrupoFamiliar(id);
    }

    async atualizarGrupoFamiliar(id: number, data: GrupoFamiliarDto): Promise<GrupoFamiliarEntity>{
        return this.grupoFamiliarRepository.atualizarGrupoFamiliar(id,data);
    }

    async deletarGrupoFamiliar(id: number): Promise<GrupoFamiliarEntity>{
        return this.grupoFamiliarRepository.deletarGrupoFamiliar(id);
    }
}
