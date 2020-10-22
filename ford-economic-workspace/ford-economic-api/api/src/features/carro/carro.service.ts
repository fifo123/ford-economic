import { Injectable, Post } from '@nestjs/common';
import { CarroDto } from './dto/carro.dto';
import { CarroRepository } from './carro.repository'
import { CarroEntity } from './carro.entity';
import { AtualizarCarroDto } from './dto/atualizar-carro.dto';
import { ListarCarros } from './interface/listar-carros.interface';

@Injectable()
export class CarroService {
    constructor(private readonly carroRepository: CarroRepository){}
 
    async criarCarro(data:CarroDto): Promise<CarroEntity>{
        return this.carroRepository.criarCarro(data);
    }

    async listarCarros(): Promise<ListarCarros>{
        return this.carroRepository.listarCarros();
    }

    async listarCarro(id: number): Promise<CarroEntity>{
        return this.carroRepository.listarCarro(id);
    }

    async atualizarCarro(id: number, data: AtualizarCarroDto): Promise<CarroEntity>{
        return this.carroRepository.atualizarCarro(id,data);
    }

    async deletarCarro(id: number): Promise<CarroEntity>{
        return this.carroRepository.deletarCarro(id);
    }
}
