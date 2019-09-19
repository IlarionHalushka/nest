import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { CustomersModule } from './customers/customers.module';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ShutdownHook } from './lifecycle-hooks/shutdown.hook';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config-module/config-module.module';

@Module({
  imports: [
    MorganModule.forRoot(),
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/nest_test'),
    CustomersModule,
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
    }),
    ConfigModule
  ],
  controllers: [AppController, CustomersController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('common'),
    },
    ShutdownHook,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
