import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private db: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const hashedPassw = await bcrypt.hashSync(createUserDto.password,10);
    
    const newUser = await this.db.user.create(
      {
        data:{
          ...createUserDto, 
          password: hashedPassw
        }
      });
      return newUser;

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    try{
      return this.db.user.findUnique({
        where: {
          id: id
        }
      });
    }catch{
      return false
    }
   
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.db.user.delete({
      where:{
        id:id
      }
    });
  }
}
