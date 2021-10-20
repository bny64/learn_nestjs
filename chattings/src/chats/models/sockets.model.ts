import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  id: false,
  collection: 'sockets', //설정하지 않으면 mongoose에서 class 이름을 소문자로 변경 후 s를 붙여서 collection명을 만든다.
  timestamps: true,
};

@Schema(options)
export class Socket extends Document {
  @Prop({
    unique: true,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  username: String;
}

export const SocketSchema = SchemaFactory.createForClass(Socket);
