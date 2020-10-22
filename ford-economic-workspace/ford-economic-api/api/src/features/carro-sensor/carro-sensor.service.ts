import { Injectable, Post } from '@nestjs/common';
import { CarroSensorEntity } from './carro-sensor.entity';
import { CarroSensorRepository } from './carro-sensor.repository';
import { AtualizarCarroSensorDto } from './dto/atualizar-carro-sensor.dto';
import { CarroSensorDto } from './dto/carro-sensor.dto';
import { ListarCarroSensores } from './interface/listar-carro-sensores.interface'

@Injectable()
export class CarroSensorService {
    constructor(private readonly carroSensorRepository: CarroSensorRepository){}

    async criarCarroSensor(data: CarroSensorDto): Promise<CarroSensorEntity>{
        return this.carroSensorRepository.criarCarroSensor(data);
    }

    async listarCarroSensores(): Promise<ListarCarroSensores>{
        return this.carroSensorRepository.listarCarroSensores();
    }

    async listarCarroSensor(id: number): Promise<CarroSensorEntity>{
        return this.carroSensorRepository.listarCarroSensor(id);
    }

    async atualizarCarroSensor(id: number, data: AtualizarCarroSensorDto): Promise<CarroSensorEntity>{
        return this.carroSensorRepository.atualizarCarroSensor(id,data);
    }

    async deletarCarroSensor(id: number): Promise<CarroSensorEntity>{
        return this.carroSensorRepository.deletarCarroSensor(id);
    }

}