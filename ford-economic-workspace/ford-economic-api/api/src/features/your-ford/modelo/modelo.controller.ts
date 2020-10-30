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
import { ModeloDto } from './dto/modelo.dto';
import { ModeloService } from './modelo.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AtualizarModeloDto } from './dto/atualizar.modelo';

@Controller('modelo')
export class ModeloController {
	constructor(private readonly modeloService: ModeloService) {}

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
							'Extensão recusada, extensões aceitas: jpg, jpeg, png e svg',
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
	async criarModelo(@UploadedFile() file: any, @Body() form: ModeloDto) {
		console.log(form);

		if (!file) {
			throw new HttpException(
				'imagem é obrigatória, extensões aceitas: jpg, jpeg, png e svg',
				HttpStatus.BAD_REQUEST,
			);
		}
		return this.modeloService.criarModelo(
			form,
			file.filename ? file.filename : 'not_found.svg',
		);
	}

	@Get('')
	async listarModelos() {
		return this.modeloService.listarModelos();
	}

	@Get('/:id')
	async listarModelo(@Param('id') id: number) {
		return this.modeloService.listarModelo(id);
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
							'Extensão recusada, extensões aceitas: jpg, jpeg, png e svg',
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
	async atualizarModelo(
		@Param('id') id: number,
		@UploadedFile() file: any,
		@Body() data: AtualizarModeloDto,
	) {
		console.log(data.nome);

		return this.modeloService.atualizarModelo(
			id,
			data,
			file ? file.filename : undefined,
		);
	}

	@Delete('/deletar/:id')
	async deletarModelo(@Param('id') id: number) {
		return this.modeloService.deletarModelo(id);
	}
}
