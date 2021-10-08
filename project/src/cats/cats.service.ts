import { Injectable } from '@nestjs/common';

@Injectable() //@Injectable이 들어간 건 provider라는 의미
export class CatsService {
  hiCatServiceProduct() {
    return 'hello cat!';
  }
}
