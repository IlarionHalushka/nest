import { Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  age: number;
}
