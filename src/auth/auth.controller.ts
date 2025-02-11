import {  Controller, HttpException, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiBearerAuth,  ApiParam } from '@nestjs/swagger';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

   /**
    * returns the token of the user
    * 
    * @param req email and password of the user
    * @returns returns the token of the user
    */
  @ApiParam({
    name: 'login',
    description: 'The login of the user',
    type: 'string',
    example: {
      "email":"ogabi2004@gmail.com",
      "password":"asdasd123"
    }
  })
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: any){
    const user = this.authService.login(req.user);
    if(!user){
      throw new HttpException('Invalid Credentials', 401);
      
    }
    return user;
  }


  /**
   * Check the jwt token of the user
   * 
   * @param req email, password and token of the user
   * @returns 200
   */
  @ApiParam({
    name: 'status',
    description: 'The status of the user',
    type: 'string',
    example: {
      email:"ogabi2004@gmail.com",
      password: "asdasd123",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoib2dhYmkyMDA0QGdtYWlsLmNvbSIsImlhdCI6MTczOTI5ODcxOCwiZXhwIjoxNzM5MzAyMzE4fQ.-WACuMv4yxLFElHVv_g_GRab9vvqvIaaHWQNUCkZn68"
    }
  })
  @ApiBearerAuth()
  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: any){
    console.log("inside authcontroller status method");
    console.log(req.user);
    
  }
}

