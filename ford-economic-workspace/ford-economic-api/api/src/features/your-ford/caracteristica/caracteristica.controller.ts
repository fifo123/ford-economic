import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post,
	UploadedFile,
	UseInterceptors,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CaracteristicaService } from './caracteristica.service';
import { AtualizarCaracteristicaDto } from './dto/atualizar-caracteristica.dto';
import { CaracteristicaDto } from './dto/caracteristica.dto';

@Controller('caracteristica')
export class CaracteristicaController {
	constructor(
		private readonly caracteristicaService: CaracteristicaService,
	) {}

	@UseInterceptors(
		FileInterceptor('icone', {
			storage: diskStorage({
				destination: './files',
				filename: (req, file, callback) => {
					const name = file.originalname.split('.')[0];
					const fileExtName = extname(file.originalname);

					callback(null, `${Date.now()}-${name}${fileExtName}`);
				},
			}),
			fileFilter: (req, file, callback) => {
				if (!file.originalname.match(/\.(svg)$/)) {
					return callback(
						new HttpException(
							'Extensão recusada, extensão aceita: svg',
							HttpStatus.BAD_REQUEST,
						),
						false,
					);
				}
				callback(null, true);
			},
		}),
	)
	@UsePipes(ValidationPipe)
	@Post('/criar')
	async criarCaracteristica(
		@UploadedFile() file: any,
		@Body() form: CaracteristicaDto,
	) {
		console.log(form);

		if (!file) {
			throw new HttpException(
				'icone é obrigatória, extensão aceita: svg',
				HttpStatus.BAD_REQUEST,
			);
		}
		return this.caracteristicaService.criarCaracteristica(
			form,
			file.filename ? file.filename : 'not_found.svg',
		);
	}

	@Get('')
	async listarCaracteristicas() {
		return this.caracteristicaService.listarCaracteristicas();
	}

	@Get('/:id')
	async listarCaracteristica(@Param('id') id: number) {
		return this.caracteristicaService.listarCaracteristica(id);
	}

	@UseInterceptors(
		FileInterceptor('icone', {
			storage: diskStorage({
				destination: './files',
				filename: (req, file, callback) => {
					const name = file.originalname.split('.')[0];
					const fileExtName = extname(file.originalname);

					callback(null, `${Date.now()}-${name}${fileExtName}`);
				},
			}),
			fileFilter: (req, file, callback) => {
				if (!file.originalname.match(/\.(svg)$/)) {
					return callback(
						new HttpException(
							'Extensão recusada, extensão aceita: svg',
							HttpStatus.BAD_REQUEST,
						),
						false,
					);
				}
				callback(null, true);
			},
		}),
	)
	@UsePipes(ValidationPipe)
	@Patch('/atualizar/:id')
	async atualizarCaracteristica(
		@Param('id') id: number,
		@UploadedFile() file: any,
		@Body() data: AtualizarCaracteristicaDto,
	) {
		console.log(data.nome);

		return this.caracteristicaService.atualizarCaracteristica(
			id,
			data,
			file ? file.filename : undefined,
		);
	}

	@Delete('/deletar/:id')
	async deletarCaracteristica(@Param('id') id: number) {
		return this.caracteristicaService.deletarCaracteristica(id);
	}
}
