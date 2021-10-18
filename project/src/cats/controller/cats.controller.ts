import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from '../service/cats.service';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestDto } from '../dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from '../dto/cat.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.requestDto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { CatCurrentDto } from '../dto/cats.current.dto';
import { Request } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';
import { Cat } from '../cats.schema';

//CLI를 사용하여 $ nest g controller '컨트롤러명'으로 컨트롤러를 생성할 수 있다.
@Controller('cats')
@UseInterceptors(SuccessInterceptor)
//@UseFilters(HttpExceptionFilter) //class 전체에서도 UseFilters 적용 가능하다.
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' }) //REST API DOCS만들 때 사용한다.
  @UseGuards(JwtAuthGuard)
  @Get()
  //핸들러 수준에서 @HttpCode(...) 데코레이터를 추가하여 이 동작을 쉽게 변경할 수 있습니다
  getCurrentCat(@Req() req: Request, @CurrentUser() cat: CatCurrentDto) {
    //service의 return값을 받고 return값이 모듈로 들어가게 되고 모듈이 nestFactory에 들어가게 되서 자동으로 client로 return
    //요청 핸들러가 자바스크립트 객체 또는 배열을 반환할 때 자동으로 JSON으로 직렬화됩니다.
    console.log(req.user);
    return cat.readOnlyData;
  }

  //REST API DOCS만들 때 사용한다.
  //response 타입 정의
  @ApiResponse({
    status: 500,
    description: 'Server error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    //@Body decorator : https://docs.nestjs.kr/custom-decorators
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logout';
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @UseInterceptors(FilesInterceptor('image', 10, multerOptions('cats')))
  @UseGuards(JwtAuthGuard)
  @Post('upload')
  uploadCatImg(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @CurrentUser() cat: Cat,
  ) {
    //console.log(files);
    return this.catsService.uploadImg(cat, files);
  }

  @ApiOperation({ summary: '모든 고양이 가져오기' })
  @Get('all')
  getAllcat() {
    return this.catsService.getAllcat();
  }
}
