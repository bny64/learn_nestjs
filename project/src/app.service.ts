// * 단일 메소드를 사용하는 기본 서비스
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 서비스 단
  getHello(): string {
    //서비스 단에서 바로 return
    return 'Hello World!';
  }
}
