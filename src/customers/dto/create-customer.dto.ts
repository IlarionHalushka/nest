import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;
}
