import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//type 또는 interface가 아니라 class를 사용하는 이유는 @패턴(Decorator)을 사용할 수있고 재사용성을 증가시킨다.
export class CatRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
