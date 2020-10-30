import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { YourFordDto } from './dto/your-ford.dto';
import { YourFordService } from './your-ford.service';

@Controller('your-ford')
export class YourFordController {
	constructor(private readonly yourFordService: YourFordService) {}

	@Post('/criar')
	async criarYourFord(@Body(ValidationPipe) data: YourFordDto) {
		return this.yourFordService.criarYourFord(data);
	}
}
