import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiModelProperty({ default: 'chris', required: true })
  readonly username: string;

  @ApiModelProperty({ default: 'secret', required: true })
  readonly password: string;
}
