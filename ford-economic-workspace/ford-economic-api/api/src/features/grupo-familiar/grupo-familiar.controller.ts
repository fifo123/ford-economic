import { Body, Controller, Get, Param, Post, UseFilters, ValidationPipe, ExceptionFilter, Patch, Delete } from '@nestjs/common';
import { GrupoFamiliarDto } from './dto/grupo-familiar.dto';
import { GrupoFamiliarService } from './grupo-familiar.service';

@Controller('grupo-familiar')
export class GrupoFamiliarController {
    constructor(private readonly grupoFamiliarService: GrupoFamiliarService){}

    @Post('/criar')
    async criarGrupoFamiliar(@Body(ValidationPipe) data: GrupoFamiliarDto){
        return this.grupoFamiliarService.criarGrupoFamiliar(data);
    }

    @Get('')
    async listarGruposFamiliares(){
        return this.grupoFamiliarService.listarGruposFamiliares();
    }

    @Get('/:id')
    async listarGrupoFamiliar(@Param('id') id: number){
        return this.grupoFamiliarService.listarGrupoFamiliar(id);
    }

    @Patch('/atualizar/:id')
    async atualizarGrupoFamiliar(@Param('id') id:number,@Body(ValidationPipe) data: GrupoFamiliarDto){
        return this.grupoFamiliarService.atualizarGrupoFamiliar(id, data)
    }

    @Delete('/deletar/:id')
    async deletarGrupoFamiliar(@Param('id') id:number){
        return this.grupoFamiliarService.deletarGrupoFamiliar(id)
    }
}
