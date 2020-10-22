import { OcorrenciaSensorEntity } from "../ocorrencia-sensor.entity";

export interface ListarOcorrenciaSensores {
    total: number;
    ocorrenciaSensores: OcorrenciaSensorEntity[]
}