import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

// test it using script from nest/sample/02-gateways/client/index.html
// then in browser console send requests via websockets:
// socket.emit('events', { test: 'test12345' })
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
