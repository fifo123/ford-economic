import { Logger } from '@nestjs/common';
import { SensorEntity } from 'src/features/sensor/sensor.entity';
import { TipsEntity } from 'src/features/tips/tips.entity';
import { CaracteristicaEntity } from 'src/features/your-ford/caracteristica/caracteristica.entity';
import { ModeloEntity } from 'src/features/your-ford/modelo/modelo.entity';
import { UsoCarroEntity } from 'src/features/your-ford/uso-carro/uso-carro.entity';
import { getRepository } from 'typeorm';
import { valoresCaracteristicas } from './caracteristicas.seed';
import { valoresModelos } from './modelos.seed';
import { Seed } from './seeds.entity';
import { valoresSensores } from './sensores.seed';
import { valoresTips } from './tips.seed';
import { valoresUsosCarro } from './usos-carro.seed';

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
			logger.verbose('Adicionando a Seed de Sensores');
		} else {
			logger.debug('Não é necessário criar a Seed de Sensores');
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
			logger.verbose('Adicionando a Seed de Características');
		} else {
			logger.debug('Não é necessário criar a Seed de Características');
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
			logger.verbose('Adicionando a Seed de Modelos');
		} else {
			logger.debug('Não é necessário criar a Seed de Modelos');
		}

		const usoCarroSeed = await seedRepository.find({
			where: { seed: 'uso-carro' },
		});
		if (usoCarroSeed.length == 0) {
			const usoCarroRepository = getRepository<UsoCarroEntity>(
				'UsoCarro',
			);
			valoresUsosCarro.map(async valor => {
				await usoCarroRepository.save(valor);
			});
			await seedRepository.save({ seed: 'uso-carro' });
			logger.verbose('Adicionando a Seed de Usos do Carro');
		} else {
			logger.debug('Não é necessário criar a Seed de Usos do Carro');
		}

		const tipsSeed = await seedRepository.find({
			where: { seed: 'tips' },
		});
		if (tipsSeed.length == 0) {
			const tipsRepository = getRepository<TipsEntity>('Tips');
			valoresTips.map(async valor => {
				await tipsRepository.save(valor);
			});
			await seedRepository.save({ seed: 'tips' });
			logger.verbose('Adicionando a Seed de Tips');
		} else {
			logger.debug('Não é necessário criar a Seed de Tips');
		}
	} catch (error) {
		throw error;
	}
}
