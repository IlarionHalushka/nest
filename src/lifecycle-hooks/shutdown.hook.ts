import { Injectable, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class ShutdownHook implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    console.log('\n APPLICATION HAS BEEN SHUT DOWN. SIGNAL: ', signal);
  }
}
