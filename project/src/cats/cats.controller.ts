import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpExceptionFilter) //class 전체에서도 UseFilters 적용 가능하다.
export class CatsController {
  constructor(private readonly catsServce: CatsService) {}

  @Get()
  //@UseFilters(HttpExceptionFilter) //해당 서비스에서 발생한 exception은 useFilter에서 적용한 filter로 넘어간다.
  getAllCat() {
    throw new HttpException({ power: 'api is broken!', mode: 404 }, 401);
    return 'get all cat api';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    //console.log(param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateParticalCat() {
    return;
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
