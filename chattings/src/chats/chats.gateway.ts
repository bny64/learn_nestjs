import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway() //게이트웨이로 소켓프로그래밍을 한다.
export class ChatsGateway {
  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket,
  ): string {
    console.log(socket.id);
    console.log(username);
    //socket.emit('hello_user', 'hello' + username);
    return 'return data';
  }
}
