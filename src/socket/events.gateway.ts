import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

@WebSocketGateway()
export class SocketSample {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleEvent(client: Client, data: string): string {
    console.log(data);
    return data;
  }
}
