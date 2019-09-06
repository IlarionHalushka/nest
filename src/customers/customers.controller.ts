import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Req,
  Request,
  UsePipes,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { ICustomer } from './interfaces/customer.interface';
import { JoiValidationPipe } from '../pipes/validation.pipe';
import { Roles } from '../decorators/roles.decorator';
import { createCustomerSchema } from './schemas/customer.schema';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomerService) {}

  @Get()
  @Roles('admin')
  async findAll(@Req() request: Request): Promise<ICustomer[]> {
    return this.customersService.findAll();
  }

  @Post()
  @HttpCode(201)
  @Roles('admin')
  @Header('Content-Type', 'application/json')
  @UsePipes(new JoiValidationPipe(createCustomerSchema))
  create(@Body() createCustomerDto: CreateCustomerDto): ICustomer {
    return this.customersService.create(createCustomerDto);
  }

  @Get(':id')
  @Roles('admin')
  findOne(@Param() params): Promise<any[]> {
    return Promise.resolve([`This action returns a #${params.id} customer`]);
  }
}
