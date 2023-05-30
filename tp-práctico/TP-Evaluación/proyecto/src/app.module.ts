import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomotorController } from './automotor/automotor.controller';
import { AutomotorService } from './automotor/automotor.service';

@Module({
  imports: [],
  controllers: [AppController, AutomotorController],
  providers: [AppService, AutomotorService],
})
export class AppModule {}
