import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AtualizarTipDto } from './dto/atualizar-tip.dto';
import { TipsDto } from './dto/tips.dto';
import { ListarTips } from './interface/listar-tips.interface';
import { TipsEntity } from './tips.entity';

@EntityRepository(TipsEntity)
export class TipsRepository extends Repository<TipsEntity> {
	async criarTip(data: TipsDto): Promise<TipsEntity> {
		try {
			const tipsCriada = this.create(data);
			return this.save(tipsCriada);
		} catch (err) {
			throw new HttpException(
				'Erro ao salvar tip',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarTips(): Promise<ListarTips> {
		try {
			const [tips, total] = await this.findAndCount({});
			return { total, tips };
		} catch (error) {
			throw new HttpException(
				'Erro ao listar Usuarios',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async listarTip(id: number): Promise<TipsEntity> {
		try {
			const tip = await this.findOne(id);
			if (!tip)
				throw new HttpException(
					'Não foi encontrado uma tip com esse ID',
					HttpStatus.BAD_REQUEST,
				);
			return tip;
		} catch (error) {
			throw new HttpException(
				'Erro ao listar tips',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async atualizarTip(id: number, data: AtualizarTipDto): Promise<TipsEntity> {
		try {
			this.update(id, data);
			return this.listarTip(id);
		} catch (error) {
			throw new HttpException(
				'Erro ao atualizar tips',
				HttpStatus.BAD_REQUEST,
			);
		}
	}
	async deletarTip(id: number): Promise<TipsEntity> {
		try {
			const tip = await this.findOne(id);
			this.delete(id);
			return tip;
		} catch (error) {
			throw new HttpException(
				'Erro ao deletar tips',
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	async carTips(idCarro): Promise<string[]> {
		try {
			const query = this.createQueryBuilder('Tips');
			query.select('Tips.dicaTemplate', 'dicaTemplate');
			query.addSelect('Tips.dicaValores', 'dicaValores');
			query.innerJoin('Tips.carro', 'Carro');

			query.where('Carro.id = :id', {
				id: idCarro,
			});

			const tips = await query.getRawMany<TipsDto>();

			const carTips: TipsDto[] = tips.map(tip => {
				if (tip.dicaValores != null) {
					return {
						dicaTemplate: tip.dicaTemplate,
						dicaValores: tip.dicaValores,
					};
				} else {
					return {
						dicaTemplate: tip.dicaTemplate,
					};
				}
			});

			const trataDica = carTips.map(car => {
				if (car.dicaValores != null) {
					var substituir: string;

					Object.keys(car.dicaValores).forEach(function(valor) {
						substituir = car.dicaTemplate.replace(
							'{' + valor + '}',
							car.dicaValores[valor],
						);
						car.dicaTemplate = substituir;
					});
				} else {
					substituir = car.dicaTemplate;
				}

				return substituir;
			});

			console.log(trataDica);

			return trataDica;
		} catch (error) {}
	}
}
