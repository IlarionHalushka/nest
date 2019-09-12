import * as helmet from 'helmet';
import * as cors from 'cors';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers.controller';
import { logger } from './logger-middleware';
import { CustomerSchema } from '../schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
  ],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), cors(), logger).forRoutes(CustomersController);
  }
}
