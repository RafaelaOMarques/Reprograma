import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('oi')
  getOi(): string {
    return this.appService.getOi();
  }

  @Get('salve')
  getHello(): string {
    return this.appService.getHello();
  }
}
