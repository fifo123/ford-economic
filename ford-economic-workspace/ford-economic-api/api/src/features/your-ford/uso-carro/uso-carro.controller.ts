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
import { AtualizarUsoCarroDto } from './dto/atualizar-uso-carro.dto';
import { UsoCarroDto } from './dto/uso-carro.dto';
import { UsoCarroService } from './uso-carro.service';

@Controller('uso-carro')
export class UsoCarroController {
	constructor(private readonly usoCarroService: UsoCarroService) {}

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
	async criarUsoCarro(@UploadedFile() file: any, @Body() form: UsoCarroDto) {
		console.log(form);

		if (!file) {
			throw new HttpException(
				'icone é obrigatória, extensão aceita: svg',
				HttpStatus.BAD_REQUEST,
			);
		}
		return this.usoCarroService.criarUsoCarro(
			form,
			file.filename ? file.filename : 'not_found.svg',
		);
	}

	@Get('')
	async listarUsoCarros() {
		return this.usoCarroService.listarUsoCarros();
	}

	@Get('/:id')
	async listarUsoCarro(@Param('id') id: number) {
		return this.usoCarroService.listarUsoCarro(id);
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
	async atualizarUsoCarro(
		@Param('id') id: number,
		@UploadedFile() file: any,
		@Body() data: AtualizarUsoCarroDto,
	) {
		console.log(data.nome);

		return this.usoCarroService.atualizarUsoCarro(
			id,
			data,
			file ? file.filename : undefined,
		);
	}

	@Delete('/deletar/:id')
	async deletarUsoCarro(@Param('id') id: number) {
		return this.usoCarroService.deletarUsoCarro(id);
	}
}
