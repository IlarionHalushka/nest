import { Inject, Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
  constructor(
    // private readonly customerModel: MongooseModule,
    // @InjectModel('Customer')
    // private readonly customerModel: Model<ICustomer>,
    // @Inject('Customer')
    // private readonly customerModel: Model<ICustomer>,
    @InjectModel('Customer') private readonly customerModel: Model<ICustomer>,
  ) {}


  // @ts-ignore
  async create(customer: ICustomer): Promise<ICustomer> {
    // const createdCustomer = new this.customerModel(customer);
    // return createdCustomer.save();
  }

  // @ts-ignore
  async findAll(): Promise<ICustomer[]> {
    // return this.customerModel.find();
  }
}
