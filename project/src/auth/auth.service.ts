import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatsRepository } from 'src/cats/cats.repository';
import { LoginRequestDto } from './dto/login.requestDto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable() //DI 가능
export class AuthService {
  constructor(
    private readonly catsRepository: CatsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    const cat = await this.catsRepository.findCatByEmail(email);

    if (!cat) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인하세요.');
    }

    //password 검사

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      cat.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { email, sub: cat.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
