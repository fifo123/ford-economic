import { Injectable } from '@nestjs/common';
import { AtualizarSensorDto } from './dto/atualizar-sensor.dto';
import { SensorDto } from './dto/sensor.dto';
import { ListarSensores } from './interface/listar-sensores.interface';
import { SensorEntity } from './sensor.entity';
import { SensorRepository } from './sensor.repository';

@Injectable()
export class SensorService {
    constructor(private readonly sensorRepository: SensorRepository){}

    async criarSensor(data: SensorDto): Promise<SensorEntity>{
        return this.sensorRepository.criarSensor(data);
    }

    async listarSensores(): Promise<ListarSensores>{
        return this.sensorRepository.listarSensores();
    }

    async listarSensor(id: number): Promise<SensorEntity>{
        return this.sensorRepository.listarSensor(id);
    }

    async atualizarSensor(id: number, data: AtualizarSensorDto): Promise<SensorEntity>{
        return this.sensorRepository.atualizarSensor(id,data);
    }

    async deletarSensor(id: number): Promise<SensorEntity>{
        return this.sensorRepository.deletarSensor(id);
    }
}