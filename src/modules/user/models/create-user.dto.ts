import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'new_user' })
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @ApiProperty({ example: 'smirnova@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'defaultPass' })
  @IsNotEmpty()
  readonly password: string;
}
