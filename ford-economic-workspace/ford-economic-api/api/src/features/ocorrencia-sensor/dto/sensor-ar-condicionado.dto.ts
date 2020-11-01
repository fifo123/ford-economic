import { BasicSensor } from './basic-sensor.dto';

export class ArCondicionadoDto extends BasicSensor {
	nivelRuido: number;
	temperatura: number;
	tempoLigado: number;
}
