import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoginService {
  constructor(private db: PrismaService){}
  
  findOneWithEmail(email: string){
    return this.db.user.findFirstOrThrow({
      where:{
        email: email,
        accountIsActive: true
      }
    });
  }
}
