import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  /**
   * The first name of the user
   * @example John
   */
  @IsString()
  @IsNotEmpty()
  firstName: string;

  /**
   * The last name of the user
   * @example Doe
   */
  @IsString()
  @IsNotEmpty()
  lastName: string;

  /**
   * The email of the user
   * @example asd@gmail.com
   */
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;


  /**
   * The password of the user
   * @example password
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
