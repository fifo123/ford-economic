import { Injectable } from '@nestjs/common';
import { AtualizarLocalizacaoDto } from './dto/atualizar-localizacao.dto';
import { LocalizacaoCarroDto } from './dto/localizacao-carro.dto';
import { ListarLocalizacaoCarros } from './inteface/listar-localizacao-carros.interface';
import { LocalizacaoCarroEntity } from './localizacao-carro.entity';
import { LocalizacaoCarroRepository } from './localizacao-carro.repository';

@Injectable()
export class LocalizacaoCarroService {
    constructor(private readonly localizacaoCarroRepository: LocalizacaoCarroRepository){}

    async criarLocalizacaoCarro(data: LocalizacaoCarroDto): Promise<LocalizacaoCarroEntity>{
        return this.localizacaoCarroRepository.criarLocalizacaoCarro(data);
    }

    async listarLocalizacoesCarros(): Promise<ListarLocalizacaoCarros>{
        return this.localizacaoCarroRepository.listarLocalizacoesCarros();
    }

    async listarLocalizacaoCarro(id: number): Promise<LocalizacaoCarroEntity>{
        return this.localizacaoCarroRepository.listarLocalizacaoCarro(id);
    }

    async atualizarLocalizacaoCarro(id: number, data: AtualizarLocalizacaoDto): Promise<LocalizacaoCarroEntity>{
        return this.localizacaoCarroRepository.atualizarLocalizacaoCarro(id,data);
    }

    async deletarLocalizacaoCarro(id: number): Promise<LocalizacaoCarroEntity>{
        return this.localizacaoCarroRepository.deletarLocalizacaoCarro(id);
    }
}
