import { Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<ICustomer>,
  ) {}

  async create(customer: ICustomer): Promise<ICustomer> {
    const createdCustomer = new this.customerModel(customer);
    return createdCustomer.save();
  }

  async findAll(): Promise<ICustomer[]> {
    return this.customerModel.find();
  }
}
