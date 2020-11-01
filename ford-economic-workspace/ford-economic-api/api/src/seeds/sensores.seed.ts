import { SensorDto } from 'src/features/sensor/dto/sensor.dto';

export const valoresSensores: SensorDto[] = [
	{
		descricao: 'Sensor de Ar-Condicionado',
		nome: 'Ar-Condicionado',
		icone: '../assets/ar-condicionado.svg',
	},
	{
		descricao: 'Sensor para medição de quilometragem',
		nome: 'Quilometragem',
		icone: '../assets/direcao.svg',
	},
	{
		descricao: 'Sensor para medição de nível de Combustível',
		nome: 'Combustível',
		icone: '../assets/combustivel.svg',
	},
	{
		descricao: 'Sensor de Frenagem',
		nome: 'Frenagem',
		icone: '../assets/frenagem.svg',
	},
	{
		descricao: 'Sensor para medir emissão de gases',
		nome: 'Gases',
		icone: '../assets/gases.svg',
	},
	{
		descricao: 'Sensor do Motor',
		nome: 'Motor',
		icone: '../assets/motor.svg',
	},
];
