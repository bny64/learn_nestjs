import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CatsRepository } from 'src/cats/cat.repository';
import { Payload } from './jwt.payload';

//passport stategy는 인증할 때 사용한다.
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly catsRepository: CatsRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, //jwt 만료기간
      secretOrKey: process.env.JWT_SECRET, //jwt 모듈을 만들 때의 secret과 일치시켜줘야 한다.
    });
  }

  //Strategy는 validate를 자동으로 실행시켜준다.
  async validate(payload: Payload) {
    const cat = await this.catsRepository.findCatByIdWithoutPassword(
      payload.sub,
    );

    if (cat) {
      return cat; //request.user 안에 cat이 들어간다.
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
