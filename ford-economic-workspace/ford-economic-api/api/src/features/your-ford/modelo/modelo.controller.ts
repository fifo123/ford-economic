import {
	Body,
	Controller,
	HttpException,
	HttpStatus,
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
	async criarModelo(@UploadedFile() file, @Body() form: ModeloDto) {
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
}
