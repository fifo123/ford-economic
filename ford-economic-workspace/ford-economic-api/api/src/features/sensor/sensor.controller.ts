import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseFilters,
	ValidationPipe,
	ExceptionFilter,
	Patch,
	Delete,
	UsePipes,
	UploadedFile,
	HttpException,
	HttpStatus,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AtualizarSensorDto } from './dto/atualizar-sensor.dto';
import { SensorDto } from './dto/sensor.dto';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {
	constructor(private readonly sensorService: SensorService) {}

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
		@Body() form: SensorDto,
	) {
		console.log(form);

		if (!file) {
			throw new HttpException(
				'icone é obrigatória, extensão aceita: svg',
				HttpStatus.BAD_REQUEST,
			);
		}
		return this.sensorService.criarSensor(
			form,
			file.filename ? file.filename : 'not_found.svg',
		);
	}
	@Get('')
	async listarGruposFamiliares() {
		return this.sensorService.listarSensores();
	}

	@Get('/:id')
	async listarsensor(@Param('id') id: number) {
		return this.sensorService.listarSensor(id);
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
		@Body() data: AtualizarSensorDto,
	) {
		console.log(data.nome);

		return this.sensorService.atualizarSensor(
			id,
			data,
			file ? file.filename : undefined,
		);
	}

	@Delete('/deletar/:id')
	async deletarsensor(@Param('id') id: number) {
		return this.sensorService.deletarSensor(id);
	}
}
