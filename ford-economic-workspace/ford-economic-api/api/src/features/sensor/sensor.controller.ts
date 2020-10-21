import { Body, Controller, Get, Param, Post, UseFilters, ValidationPipe, ExceptionFilter, Patch, Delete } from '@nestjs/common';
import { AtualizarSensorDto } from './dto/atualizar-sensor.dto';
import { SensorDto } from './dto/sensor.dto';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {
    constructor(private readonly sensorService: SensorService){}

    @Post('/criar')
    async criarsensor(@Body(ValidationPipe) data: SensorDto){
        return this.sensorService.criarSensor(data);
    }

    @Get('')
    async listarGruposFamiliares(){
        return this.sensorService.listarSensores();
    }

    @Get('/:id')
    async listarsensor(@Param('id') id: number){
        return this.sensorService.listarSensor(id);
    }

    @Patch('/atualizar/:id')
    async atualizarsensor(@Param('id') id:number,@Body(ValidationPipe) data: AtualizarSensorDto){
        return this.sensorService.atualizarSensor(id, data)
    }

    @Delete('/deletar/:id')
    async deletarsensor(@Param('id') id:number){
        return this.sensorService.deletarSensor(id)
    }
}