import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroDto } from './dto/carro.dto';

@Controller('carro')
export class CarroController {
    constructor(private readonly usuarioService: CarroService){}

    @Post('/criar')
    async criarCarro(@Body(ValidationPipe) data: CarroDto) {
        return this.usuarioService.criarCarro(data);
    }

    @Get('')
    async listarCarros(){
        return this.usuarioService.listarCarros();
    }

    @Get('/:id')
    async listarCarro(@Param('id') id: number){
        return this.usuarioService.listarCarro(id);
    }

    @Patch('/atualizar/:id')
    async atualizarCarro(@Param('id') id:number, @Body(ValidationPipe) data: CarroDto){
        return this.usuarioService.atualizarCarro(id, data)
    }

    @Delete('/deletar/:id')
    async deletarCarro(@Param('id') id:number){
        return this.usuarioService.deletarCarro(id);
    }
}
