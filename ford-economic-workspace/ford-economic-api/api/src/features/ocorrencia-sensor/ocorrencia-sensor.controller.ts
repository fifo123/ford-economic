import { Body, Controller, Get, Param, Post, UseFilters, ValidationPipe, ExceptionFilter, Patch, Delete } from '@nestjs/common';
import { OcorrenciaSensorService } from './ocorrencia-sensor.service'
import { OcorrenciaSensorDto } from './dto/ocorrencia-sensor.dto'
import { AtualizarOcorrenciaSensorDto } from './dto/atualizar-ocorrencia-sensor.dto'

@Controller('ocorrencia-sensor')
export class OcorrenciaSensorController {
    constructor(private readonly ocorrenciaSensorService: OcorrenciaSensorService){}

    @Post('/criar')
    async criarOcorrenciaSensor(@Body(ValidationPipe) data: OcorrenciaSensorDto){
        return this.ocorrenciaSensorService.criarOcorrenciaSensor(data);
    }

    @Get('')
    async listarOcorrenciaSensores(){
        return this.ocorrenciaSensorService.listarOcorrenciaSensores();
    }

    @Get('/:id')
    async listarOcorrenciaSensor(@Param('id') id: number){
        return this.ocorrenciaSensorService.listarOcorrenciaSensor(id);
    }

    @Patch('/atualizar/:id')
    async atualizarOcorrenciaSensor(@Param('id') id:number,@Body(ValidationPipe) data: AtualizarOcorrenciaSensorDto){
        return this.ocorrenciaSensorService.atualizarOcorrenciaSensor(id, data)
    }

    @Delete('/deletar/:id')
    async deletarOcorrenciaSensor(@Param('id') id:number){
        return this.ocorrenciaSensorService.deletarSensor(id)
    }
}