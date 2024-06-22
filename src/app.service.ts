import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOi(): string {
    return 'Oieeee';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
