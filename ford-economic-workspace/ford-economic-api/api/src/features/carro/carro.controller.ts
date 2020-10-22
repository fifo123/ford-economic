import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CarroService } from './carro.service';
import { AtualizarCarroDto } from './dto/atualizar-carro.dto';
import { CarroDto } from './dto/carro.dto';

@Controller('carro')
export class CarroController {
    constructor(private readonly carroService: CarroService){}

    @Post('/criar')
    async criarCarro(@Body(ValidationPipe) data: CarroDto) {
        return this.carroService.criarCarro(data);
    }

    @Get('')
    async listarCarros(){
        return this.carroService.listarCarros();
    }

    @Get('/:id')
    async listarCarro(@Param('id') id: number){
        return this.carroService.listarCarro(id);
    }

    @Patch('/atualizar/:id')
    async atualizarCarro(@Param('id') id:number, @Body(ValidationPipe) data: AtualizarCarroDto){
        return this.carroService.atualizarCarro(id, data)
    }

    @Delete('/deletar/:id')
    async deletarCarro(@Param('id') id:number){
        return this.carroService.deletarCarro(id);
    }
}
