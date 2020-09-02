import { Controller, Get } from '@nestjs/common';

@Controller('sensores')
export class SensoresController {
  @Get('hello-world')
  getHelloWorld(): string {
    return 'Hello World';
  }
}
