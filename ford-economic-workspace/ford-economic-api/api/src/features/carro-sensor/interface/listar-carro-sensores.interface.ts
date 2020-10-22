import { CarroSensorEntity } from "../carro-sensor.entity";

export interface ListarCarroSensores {
    total: number;
    carroSensor: CarroSensorEntity[]
}