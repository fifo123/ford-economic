import { Logger } from '@nestjs/common';
import { SensorEntity } from 'src/features/sensor/sensor.entity';
import { CaracteristicaEntity } from 'src/features/your-ford/caracteristica/caracteristica.entity';
import { ModeloEntity } from 'src/features/your-ford/modelo/modelo.entity';
import { getRepository } from 'typeorm';
import { valoresCaracteristicas } from './caracteristicas.seed';
import { valoresModelos } from './modelos.seed';
import { Seed } from './seeds.entity';
import { valoresSensores } from './sensores.seed';

export async function seed() {
	try {
		const logger = new Logger();

		const seedRepository = getRepository<Seed>('Seeds');
		const sensoresSeed = await seedRepository.find({
			where: { seed: 'sensores' },
		});
		if (sensoresSeed.length == 0) {
			const sensoresRepository = getRepository<SensorEntity>('Sensor');
			valoresSensores.map(async valor => {
				await sensoresRepository.save(valor);
			});
			await seedRepository.save({ seed: 'sensores' });
			logger.log('Adicionando a Seed de Sensores');
		} else {
			logger.log('Não é necessário criar a Seed de Sensores');
		}

		const caracteristicaSeed = await seedRepository.find({
			where: { seed: 'caracteristica' },
		});
		if (caracteristicaSeed.length == 0) {
			const caracteristicaRepository = getRepository<
				CaracteristicaEntity
			>('Caracteristica');
			valoresCaracteristicas.map(async valor => {
				await caracteristicaRepository.save(valor);
			});
			await seedRepository.save({ seed: 'caracteristica' });
			logger.log('Adicionando a Seed de Características');
		} else {
			logger.log('Não é necessário criar a Seed de Características');
		}

		const modeloSeed = await seedRepository.find({
			where: { seed: 'modelo' },
		});
		if (modeloSeed.length == 0) {
			const modeloRepository = getRepository<ModeloEntity>('Modelo');
			valoresModelos.map(async valor => {
				await modeloRepository.save(valor);
			});
			await seedRepository.save({ seed: 'modelo' });
			logger.log('Adicionando a Seed de Modelos');
		} else {
			logger.log('Não é necessário criar a Seed de Modelos');
		}
	} catch (error) {
		throw error;
	}
}
