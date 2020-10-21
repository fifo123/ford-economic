import { Body, Controller, Get, Param, Post, UseFilters, ValidationPipe, ExceptionFilter, Patch, Delete } from '@nestjs/common';
import { AtualizarLocalizacaoDto } from './dto/atualizar-localizacao.dto';
import { LocalizacaoCarroDto } from './dto/localizacao-carro.dto';
import { LocalizacaoCarroService } from './localizacao-carro.service';

@Controller('localizacao-carro')
export class LocalizacaoCarrosController {
    constructor(private readonly localizacaoCarro: LocalizacaoCarroService){}

    @Post('/criar')
    async criarLocalizacaoCarro(@Body(ValidationPipe) data: LocalizacaoCarroDto){
        return this.localizacaoCarro.criarLocalizacaoCarro(data);
    }

    @Get('')
    async listarLocalizacoesCarros(){
        return this.localizacaoCarro.listarLocalizacoesCarros();
    }

    @Get('/:id')
    async listarLocalizacaoCarro(@Param('id') id: number){
        return this.localizacaoCarro.listarLocalizacaoCarro(id);
    }

    @Patch('/atualizar/:id')
    async atualizarLocalizacaoCarro(@Param('id') id:number,@Body(ValidationPipe) data: AtualizarLocalizacaoDto){
        return this.localizacaoCarro.atualizarLocalizacaoCarro(id, data)
    }

    @Delete('/deletar/:id')
    async deletarLocalizacaoCarro(@Param('id') id:number){
        return this.localizacaoCarro.deletarLocalizacaoCarro(id)
    }
}
