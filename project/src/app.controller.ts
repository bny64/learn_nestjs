// * 하나의 라우트가 있는 기본 컨트롤러
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

//@와 같은 데코레이터는 기능을 첨가한다고 생각하면 된다.
@Controller()
export class AppController {
  //nestjs에서는 클래스 내부에서 생성자로 초기화해서 사용
  //의존성 주입 패턴
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatsService,
  ) {}

  @Get()
  getHello() {
    //service의 return값을 받고 return값이 모듈로 들어가게 되고 모듈이 nestFactory에 들어가게 되서 자동으로 client로 return
    return this.appService.getHello();
  }
}
