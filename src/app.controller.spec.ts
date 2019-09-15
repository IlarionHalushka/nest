import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { CustomerSchema } from './customers/schemas/customer.schema';
import { CustomerService } from './customers/customer.service';
import { CustomersController } from './customers/customers.controller';

describe.only('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
      ],
      controllers: [AppController, CustomersController],
      providers: [
        AppService,
        {
          provide: getModelToken('Customer'),
          useValue: CustomerSchema,
        },
        AuthService,
        CustomerService
      ],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
