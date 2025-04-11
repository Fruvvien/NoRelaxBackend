import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
  /**
   * The first name of the user
   */
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  /**
   * The last name of the user
   */
  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  /**
   * The email of the user
   */
  @ApiProperty({
    description: 'The email of the user',
    example: 'asd@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * The password of the user
   */
  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  /**
   * The phone number of the user (optional)
   */
  @ApiPropertyOptional({
    description: 'The phone number of the user',
    example: '+36 30 123 4567',
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  /**
   * The birth date of the user
   */
  @ApiProperty({
    description: 'The birth date of the user',
    example: '1990-01-01',
  })
  @IsString()
  birthDay: string;
}
