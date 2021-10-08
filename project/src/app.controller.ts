// * 하나의 라우트가 있는 기본 컨트롤러
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

//@와 같은 데코레이터는 기능을 첨가한다고 생각하면 된다.
@Controller('cats')
export class AppController {
  //nestjs에서는 클래스 내부에서 생성자로 초기화해서 사용
  //의존성 주입 패턴
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string },
  ): string {
    //service의 return값을 받고 return값이 모듈로 들어가게 되고 모듈이 nestFactory에 들어가게 되서 자동으로 client로 return
    //console.log(req);
    //console.log(param);
    return this.appService.getHello();
  }
}
