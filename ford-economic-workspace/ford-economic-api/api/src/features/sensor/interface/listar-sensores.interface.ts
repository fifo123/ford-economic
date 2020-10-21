import { SensorEntity } from "../sensor.entity";

export interface ListarSensores {
    total: number;
    sensores: SensorEntity[]
}