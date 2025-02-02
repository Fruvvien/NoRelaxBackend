import { Request, Controller, HttpException, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Request() req){
    const user = this.authService.login(req.user);
    if(!user){
      throw new HttpException('Invalid Credentials', 401);
    }
    return user;
  }

}
