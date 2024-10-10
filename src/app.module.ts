import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalusModule } from './balus/balus.module';

@Module({
  imports: [BalusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
