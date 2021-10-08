import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    //response가 완료가 됐을 때 사용하는 이벤트
    res.on('finish', () => {
      this.logger.log(
        `req.ip : ${req.ip}, req.originalUrl : ${req.originalUrl}`,
      );
    });
    next();
  }
}
