import { SensorEntity } from 'src/features/sensor/sensor.entity';
import { CaracteristicaEntity } from 'src/features/your-ford/caracteristica/caracteristica.entity';
import { getRepository } from 'typeorm';
import { valoresCaracteristicas } from './caracteristicas.seed';
import { Seed } from './seeds.entity';
import { valoresSensores } from './sensores.seed';

export async function seed() {
	try {
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
		}
	} catch (error) {
		throw error;
	}
}
