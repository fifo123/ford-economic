import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipsController } from './tips.controller';
import { TipsRepository } from './tips.repository';
import { TipsService } from './tips.service';

@Module({
	imports: [TypeOrmModule.forFeature([TipsRepository])],
	controllers: [TipsController],
	providers: [TipsService],
	exports: [TipsService],
})
export class TipsModule {}
