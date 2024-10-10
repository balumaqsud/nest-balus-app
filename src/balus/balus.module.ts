import { Module } from '@nestjs/common';
import { BalusController } from './balus.controller';
import { BalusService } from './balus.service';

@Module({
  controllers: [BalusController],
  providers: [BalusService]
})
export class BalusModule {}
