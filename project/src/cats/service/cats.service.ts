import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CatRequestDto } from '../dto/cats.request.dto';
import { CatsRepository } from '../cats.repository';
import { Cat } from '../cats.schema';

// CLI를 사용하여 서비스 생성은 $ nest g service '서비스명' => '서비스명.service.ts'
// @Injectable이 들어간 건 provider라는 의미
// @Injectable은 Nest IoC 컨테이너에서 관리할 수 있는 클래스임을 선언하는 메타데이터를 첨부
@Injectable()
export class CatsService {
  //service는 클래스 생성자(constructor)를 통해 주입
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이는 이미 있습니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }

  async uploadImg(cat: Cat, files: Express.Multer.File[]) {
    const fileName = `cats/${files[0].filename}`;

    console.log(fileName);
    const newCat = this.catsRepository.findByIdAndUpdateImg(cat.id, fileName);
    console.log(newCat);
    return newCat;
  }

  hiCatServiceProduct() {}
}
