import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourFordController } from './your-ford.controller';
import { YourFordRepository } from './your-ford.repository';
import { YourFordService } from './your-ford.service';

@Module({
	imports: [TypeOrmModule.forFeature([YourFordRepository])],
	controllers: [YourFordController],
	providers: [YourFordService],
})
export class YourFordModule {}
