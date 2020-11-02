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
import { CarroService } from './carro.service';
import { AtualizarCarroDto } from './dto/atualizar-carro.dto';
import { CarroDto } from './dto/carro.dto';

@Controller('carro')
export class CarroController {
	constructor(private readonly carroService: CarroService) {}

	@UseInterceptors(
		FileInterceptor('imagem', {
			storage: diskStorage({
				destination: './files',
				filename: (req, file, callback) => {
					const name = file.originalname.split('.')[0];
					const fileExtName = extname(file.originalname);

					callback(null, `${Date.now()}-${name}${fileExtName}`);
				},
			}),
			fileFilter: (req, file, callback) => {
				if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
					return callback(
						new HttpException(
							'Extensão recusada, extensão aceita: svg, jpg, jpeg, png, svg',
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
	async criarCarro(@UploadedFile() file: any, @Body() form: CarroDto) {
		console.log(form);

		if (!file) {
			throw new HttpException(
				'imagem é obrigatória, extensão aceita: svg',
				HttpStatus.BAD_REQUEST,
			);
		}
		return this.carroService.criarCarro(
			form,
			file.filename ? file.filename : 'not_found.svg',
		);
	}

	@Get('')
	async listarCarros() {
		return this.carroService.listarCarros();
	}

	@Get('/:id')
	async listarCarro(@Param('id') id: number) {
		return this.carroService.listarCarro(id);
	}

	@UseInterceptors(
		FileInterceptor('imagem', {
			storage: diskStorage({
				destination: './files',
				filename: (req, file, callback) => {
					const name = file.originalname.split('.')[0];
					const fileExtName = extname(file.originalname);

					callback(null, `${Date.now()}-${name}${fileExtName}`);
				},
			}),
			fileFilter: (req, file, callback) => {
				if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
					return callback(
						new HttpException(
							'Extensão recusada, extensão aceita: svg, jpg, jpeg, png, svg',
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
	async atualizarCarro(
		@Param('id') id: number,
		@UploadedFile() file: any,
		@Body() data: AtualizarCarroDto,
	) {
		return this.carroService.atualizarCarro(
			id,
			data,
			file ? file.filename : undefined,
		);
	}

	@Delete('/deletar/:id')
	async deletarCarro(@Param('id') id: number) {
		return this.carroService.deletarCarro(id);
	}
}
