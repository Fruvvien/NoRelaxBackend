import { Controller, Get, Param } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('userLogin')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  /**
   * Returns the data of a user with the given email
   * 
   * @param email The email of the user
   * @returns The user data
   */
  @ApiParam({
    name: 'email',
    description: 'The email of the user to retrieve',
    type: 'string',
    example: 'admin@gmail.com',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the user data',
    schema: {
      example: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'admin@gmail.com',
        accountType: 'user',
        createdAt: '2021-09-29T06:30:00.000Z',
        accountIsActive: true,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @Get(':email')
  findOneWithEmail(@Param('email') email: string) {
    return this.loginService.findOneWithEmail(email);
  }
}
