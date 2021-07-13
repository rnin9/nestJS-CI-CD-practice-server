import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Dev & CI/CD ver.2 World! changed in docker';
  }
}
