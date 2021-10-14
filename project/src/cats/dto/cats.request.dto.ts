import { PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema'; //chats.schema 상속

//type 또는 interface가 아니라 class를 사용하는 이유는 @패턴(Decorator)을 사용할 수있고 재사용성을 증가시킨다.
export class CatRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {}
