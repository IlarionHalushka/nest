import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomerService } from './customer.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('Customers Controller', () => {
  let controller: CustomersController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomerService],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAll []"', () => {
    return request(app.getHttpServer())
      .get('/customers')
      .expect(200)
      .expect([]);
  });

  it('should findOne', () => {
    return request(app.getHttpServer())
      .get('/customers/123')
      .expect(200)
      .expect(['This action returns a #123 customer']);
  });

  it('should create customer', () => {
    return request(app.getHttpServer())
      .post('/customers')
      .send({ name: 'John', age: 12 })
      .expect(201)
      .expect({ name: 'John', age: 12 });
  });
});
