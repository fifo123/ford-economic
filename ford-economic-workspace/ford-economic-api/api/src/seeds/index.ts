import { SensorEntity } from 'src/features/sensor/sensor.entity';
import { getRepository } from 'typeorm';
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
	} catch (error) {
		throw error;
	}
}
