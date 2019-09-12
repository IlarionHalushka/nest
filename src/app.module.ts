import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { CustomerService } from './customers/customer.service';
import { CustomersModule } from './customers/customers.module';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ShutdownHook } from './lifecycle-hooks/shutdown.hook';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CustomersModule,
    MorganModule.forRoot(),
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest_test'),
  ],
  controllers: [AppController, CustomersController],
  providers: [
    AppService,
    CustomerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('common'),
    },
    ShutdownHook,
  ],
})
export class AppModule {}
