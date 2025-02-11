import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateLoginDto {
  /**
   * The email of the user
   * @example asd@gmail.com
   */
  @IsString()
  @IsEmail()
  email:string


  /**
   * The password of the user
   * @example password
   */ 
  @IsString()
  @MinLength(6)
  password: string
}
