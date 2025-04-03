import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPlayloadDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { LoginService } from 'src/login/login.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService, private loginService: LoginService, private jwtService: JwtService){}



  async login(user: any){
         
    try {
     const payload = { id: user.id, email: user.email,  };
      const role = await this.db.user.findUnique({
        where:{
          id: user.id
        }

      })

      const createdToken = await this.db.jWTToken.create({
        data: {
          token:  await this.jwtService.signAsync(payload),
          user: { connect: { id: user.id } },
          accountType: role.accounType

        }
      });
      return createdToken;
    } catch (error) {
      console.error('Error creating JWT token:', error);
      throw new Error('Could not create JWT token');
    }
    
  }

  async validateUserStrategy(authPlayload: AuthPlayloadDto){
    const findUser = await this.loginService.findOneWithEmail(authPlayload.email)
    if(!findUser){
      return null;
    }
    const isMatch = await bcrypt.compare(authPlayload.password, findUser.password);
    
      if(isMatch){
        return findUser;
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    
  }

}
