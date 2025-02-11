import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoginService {
  constructor(private db: PrismaService){}

  /* create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  } */

  findOneWithEmail(email: string){
    return this.db.user.findFirstOrThrow({
      where:{
        email: email
      }
    });
  }

  /* update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  } */
}
