import { Module } from '@nestjs/common';
import { SocketSample } from './events.gateway';

@Module({
  providers: [SocketSample]
})
export class SocketModule {}
