import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	ValidationPipe,
} from '@nestjs/common';
import { AtualizarYourFordDto } from './dto/atualizar-your-ford.dto';
import { YourFordDto } from './dto/your-ford.dto';
import { YourFordService } from './your-ford.service';

@Controller('your-ford')
export class YourFordController {
	constructor(private readonly yourFordService: YourFordService) {}

	@Post('/criar')
	async criarYourFord(@Body(ValidationPipe) data: YourFordDto) {
		return this.yourFordService.criarYourFord(data);
	}

	@Get('')
	async listarYourFords() {
		return this.yourFordService.listarYourFords();
	}

	@Get('/:id')
	async listarYourFord(@Param('id') id: number) {
		return this.yourFordService.listarYourFord(id);
	}

	@Patch('/atualizar/:id')
	async atualizarYourFord(
		@Param('id') id: number,
		@Body(ValidationPipe) data: AtualizarYourFordDto,
	) {
		return this.yourFordService.atualizarYourFord(id, data);
	}

	@Delete('/deletar/:id')
	async deletarYourFord(@Param('id') id: number) {
		return this.yourFordService.deletarYourFord(id);
	}
}
