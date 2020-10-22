import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CarroSensorService } from './carro-sensor.service';
import { AtualizarCarroSensorDto } from './dto/atualizar-carro-sensor.dto';
import { CarroSensorDto } from './dto/carro-sensor.dto';

@Controller('carro-sensor')
export class CarroSensorController {
    constructor(private readonly carroSensorService: CarroSensorService){}

    @Post('/criar')
    async criarCarroSensor(@Body(ValidationPipe) data: CarroSensorDto) {
        return this.carroSensorService.criarCarroSensor(data);
    }

    @Get('')
    async listarCarroSensores(){
        return this.carroSensorService.listarCarroSensores();
    }

    @Get('/:id')
    async listarCarroSensor(@Param('id') id: number){
        return this.carroSensorService.listarCarroSensor(id);
    }

    @Patch('/atualizar/:id')
    async atualizarCarroSensor(@Param('id') id:number, @Body(ValidationPipe) data: AtualizarCarroSensorDto){
        return this.carroSensorService.atualizarCarroSensor(id, data)
    }

    @Delete('/deletar/:id')
    async deletarCarroSensor(@Param('id') id:number){
        return this.carroSensorService.deletarCarroSensor(id);
    }
}