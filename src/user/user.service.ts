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
    const accountIsActive = await this.db.user.findFirst({
      where:{
        email: createUserDto.email,
        accountIsActive: true
      }
    }).catch(()=>{
      return ""
    })

    if(accountIsActive){
      return false
    }
    else{
      const newUser = await this.db.user.create(
        {
          data:{
            ...createUserDto, 
            password: hashedPassw
          }
        });
        return newUser;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    try{
      return this.db.user.findUnique({
        where: {
          id: id
        },
        include:{
          reservation: true,
          order: true
        }
      });
    }catch{
      return false
    }
   
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.db.user.update({
      where:{
        id:id
      },
      data:{
        ...updateUserDto,
        accountIsActive: updateUserDto.accountIsActive,
      }
    });
    
  }

  remove(id: number) {
    return `This action delete a #${id} user` ;
  }
}
