import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
//AuthGuard는 strategy를 자동으로 실행시켜줌.
//AuthGuard를 주입받게 되면(CatsController -> getCurrentCat) auth.strategy.ts의 validate함수가 실행된다.
