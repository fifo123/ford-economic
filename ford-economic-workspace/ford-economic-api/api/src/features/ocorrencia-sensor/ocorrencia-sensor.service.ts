import { Injectable } from '@nestjs/common';
import { AtualizarOcorrenciaSensorDto } from './dto/atualizar-ocorrencia-sensor.dto';
import { OcorrenciaSensorDto } from './dto/ocorrencia-sensor.dto';
import { ListarOcorrenciaSensores } from './interface/listar-ocorrencia-sensores.interface';
import { OcorrenciaSensorEntity } from './ocorrencia-sensor.entity';
import { OcorrenciaSensorRepository } from './ocorrencia-sensor.repository';

@Injectable()
export class OcorrenciaSensorService {
    constructor(private readonly ocorrenciaSensorRepository: OcorrenciaSensorRepository){}

    async criarOcorrenciaSensor(data: OcorrenciaSensorDto): Promise<OcorrenciaSensorEntity>{
        return this.ocorrenciaSensorRepository.criarOcorrenciaSensor(data);
    }

    async listarOcorrenciaSensores(): Promise<ListarOcorrenciaSensores>{
        return this.ocorrenciaSensorRepository.listarOcorrenciaSensores();
    }

    async listarOcorrenciaSensor(id: number): Promise<OcorrenciaSensorEntity>{
        return this.ocorrenciaSensorRepository.listarOcorrenciaSensor(id);
    }

    async atualizarOcorrenciaSensor(id: number, data: AtualizarOcorrenciaSensorDto): Promise<OcorrenciaSensorEntity>{
        return this.ocorrenciaSensorRepository.atualizarOcorrenciaSensor(id,data);
    }

    async deletarOcorrenciaSensor(id: number): Promise<OcorrenciaSensorEntity>{
        return this.ocorrenciaSensorRepository.deletarOcorrenciaSensor(id);
    }
}