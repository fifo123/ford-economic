import { Module } from '@nestjs/common';
import { TipsModule } from '../../tips/tips.module';
import { PageTipsController } from './page-tips.controller';

@Module({
	controllers: [PageTipsController],
	imports: [TipsModule],
})
export class PageTipsModule {}
