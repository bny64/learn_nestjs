import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema'; //chats.schema 상속

//PickType으로 필요한 필드값만 가져올 수 있다.
//OmitType은 필요하지 않는 필드값 제외
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  //class에는 없지만 mongoose에서 id를 부여하기 때문에 추가
  @ApiProperty({
    example: '1010111',
    description: 'id',
  })
  id: string;
}
