import { Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';

@Injectable()
export class CustomerService {
  private readonly customers: ICustomer[] = [];

  create(customer: ICustomer) {
    this.customers.push(customer);
  }

  findAll(): ICustomer[] {
    return this.customers;
  }
}
