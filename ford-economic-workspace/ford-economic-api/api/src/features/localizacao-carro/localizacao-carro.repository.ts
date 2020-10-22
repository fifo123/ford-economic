import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AtualizarLocalizacaoDto } from "./dto/atualizar-localizacao.dto";
import { LocalizacaoCarroDto } from "./dto/localizacao-carro.dto";
import { ListarLocalizacaoCarros } from "./inteface/listar-localizacao-carros.interface";
import { LocalizacaoCarroEntity } from "./localizacao-carro.entity";

@EntityRepository(LocalizacaoCarroEntity)
export class LocalizacaoCarroRepository extends Repository<LocalizacaoCarroEntity> {
    async criarLocalizacaoCarro(data: LocalizacaoCarroDto): Promise<LocalizacaoCarroEntity>{
        try {
            const localizacaoCarros = this.create(data);
            return this.save(localizacaoCarros);
        } catch (error) {
            throw new HttpException(
				'Erro ao salvar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async listarLocalizacoesCarros(): Promise<ListarLocalizacaoCarros>{
        try {
            const [localizacaoCarro, total] = await this.findAndCount({relations: ['carro']});
            return {total, localizacaoCarro}
        } catch (error) {
            throw new HttpException(
				'Erro ao listar Grupos Familiares',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async listarLocalizacaoCarro(id: number): Promise<LocalizacaoCarroEntity>{
        try {
            const LocalizacaoCarros = await this.findOne(id, {relations: ['carro']})
            if(!LocalizacaoCarros)
                throw new HttpException(
                    'Não foi encontrado um Grupo Familiar com esse ID',
                    HttpStatus.BAD_REQUEST,
                );
            return LocalizacaoCarros;
        } catch (error) {
            throw new HttpException(
				'Erro ao listar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async atualizarLocalizacaoCarro(id:number, data: AtualizarLocalizacaoDto): Promise<LocalizacaoCarroEntity>{
        try {
            this.update(id, data);
            return this.findOne(id);
        } catch (error) {
            throw new HttpException(
				'Erro ao atualizar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
    async deletarLocalizacaoCarro(id:number): Promise<LocalizacaoCarroEntity>{
        try {
            const localizacaoCarros = await this.findOne(id);
            this.delete(id);
            return localizacaoCarros;
        } catch (error) {
            throw new HttpException(
				'Erro ao deletar Grupo Familiar',
				HttpStatus.BAD_REQUEST,
			);
        }
    }
}