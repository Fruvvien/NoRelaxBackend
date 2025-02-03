import { Request, Controller, HttpException, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: any){
    const user = this.authService.login(req.user);
    if(!user){
      throw new HttpException('Invalid Credentials', 401);
    }
    return user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: any){
    console.log("inside authcontroller status method");
    console.log(req.user);
    
  }
}
