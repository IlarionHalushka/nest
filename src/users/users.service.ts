import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async findOne(username: string): Promise<IUser | undefined> {
    return this.userModel.findOne({ username });
  }
}
