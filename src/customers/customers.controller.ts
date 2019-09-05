import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Req,
  Request, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { ICustomer } from './interfaces/customer.interface';
import { JoiValidationPipe } from '../pipes/validation.pipe';
import { Roles } from '../decorators/roles.decorator';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomerService) {}

  // `findAll` should be on top of `findOne` method because the order matters and parameters are not necessary(required)
  @Get()
  @Roles('admin')
  async findAll(@Req() request: Request): Promise<ICustomer[]> {
    return this.customersService.findAll();
  }

  // WITH OBSERVABLE:
  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }

  @Get(':id')
  @Roles('admin')
  findOne(@Param() params): Promise<any[]> {
    // findOne(@Param('id') id): string {  // to get just id param
    console.log(params.id);
    return Promise.resolve([`This action returns a #${params.id} cat`]);
  }

  @Post()
  @HttpCode(204)
  @Roles('admin')
  @Header('Content-Type', 'application/json')
  // TODO test if both validations work as expected
  @UsePipes(new ValidationPipe({ transform: true }))
  @UsePipes(new JoiValidationPipe(CreateCustomerDto))
  create(@Body() createCustomerDto: CreateCustomerDto): void {
    this.customersService.create(createCustomerDto);
  }
}
