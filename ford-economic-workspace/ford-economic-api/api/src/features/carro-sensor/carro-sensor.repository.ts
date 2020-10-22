import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CarroSensorEntity } from "./carro-sensor.entity";
import { AtualizarCarroSensorDto } from "./dto/atualizar-carro-sensor.dto";
import { CarroSensorDto } from "./dto/carro-sensor.dto";
import { ListarCarroSensores } from "./interface/listar-carro-sensores.interface";

@EntityRepository(CarroSensorEntity)
export class CarroSensorRepository extends Repository<CarroSensorEntity> {
    async criarCarroSensor(data: CarroSensorDto): Promise<CarroSensorEntity>{
        try {
            const carroSensor = this.create(data);
            return this.save(carroSensor);
        } catch (err) {
            throw new HttpException(
				'Erro ao salvar carro',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async listarCarroSensores(): Promise<ListarCarroSensores>{
        try {
            const [carroSensor, total] = await this.findAndCount({
                relations: ['sensor', 'carro'],
                order: {
                    criado: 'DESC'
                }
            });
            return {total, carroSensor}
        } catch (error) {
            throw new HttpException(
				'Erro ao listar sensores de carros',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async listarCarroSensor(id: number): Promise<CarroSensorEntity>{
        try {
            const carroSensor = await this.findOne(id, {
                relations: ['sensor', 'carro'],
                order: {
                    criado: 'DESC'
                }
            })
            if(!carroSensor)
                throw new HttpException(
                    'Não foi encontrado um sensor de carro com esse ID',
                    HttpStatus.BAD_REQUEST,
                );
            return carroSensor;
        } catch (error) {
            throw new HttpException(
				'Erro ao listar carro',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async atualizarCarroSensor(id:number, data: AtualizarCarroSensorDto): Promise<CarroSensorEntity>{
        try {
            this.update(id, data);
            return this.listarCarroSensor(id);
        } catch (error) {
            throw new HttpException(
				'Erro ao atualizar sensor de carro',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async deletarCarroSensor(id:number): Promise<CarroSensorEntity>{
        try {
            const carroSensor = await this.findOne(id);
            this.delete(id);
            return carroSensor;
        } catch (error) {
            throw new HttpException(
				'Erro ao deletar sensor de carro',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
}