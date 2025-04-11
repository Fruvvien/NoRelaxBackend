import { Controller, HttpException, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiBearerAuth, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Auth') 
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Returns the token of the user
   * 
   * @param req email and password of the user
   * @returns The token of the user
   */
  @Post('login')
  @UseGuards(LocalGuard)
  @ApiBody({
    description: 'The login credentials of the user',
    schema: {
      example: {
        email: 'ogabi2004@gmail.com',
        password: 'asdasd123',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    schema: {
      example: {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
  })
  login(@Req() req: any) {
    const user = this.authService.login(req.user);
    if (!user) {
      throw new HttpException('Invalid Credentials', 401);
    }
    return user;
  }

  /**
   * Check the JWT token of the user
   * 
   * @param req The request containing the JWT token
   * @returns The user data
   */
  @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Successfully validated the token',
    schema: {
      example: {
        id: 23,
        email: 'ogabi2004@gmail.com',
        iat: 1739298718,
        exp: 1739302318,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Invalid or missing token.',
  })
  status(@Req() req: any) {
    console.log('Inside authcontroller status method');
    console.log(req.user);
    return req.user;
  }
}
