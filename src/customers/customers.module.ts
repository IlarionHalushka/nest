import * as helmet from 'helmet';
import * as cors from 'cors';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { logger } from './logger-middleware';

@Module({})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(helmet(), cors(), logger)
      .forRoutes(CustomersController);
  }
}
