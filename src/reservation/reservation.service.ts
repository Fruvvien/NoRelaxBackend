import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private db: PrismaService){}

  create(createReservationDto: CreateReservationDto,) {
    
  }

  async findAll() {
    return await this.db.reservation.findMany();
  }

  async findOne(id: number) {
    return await this.db.reservation.findUnique({
      where:{
        id: id
      }
    }) ;
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
     
      return await this.db.reservation.update({
        where:{
          id: id
        },
        data:{
          isReserved: updateReservationDto.isReserved,
          reservationDate: updateReservationDto.reservationDate,
          user:{
            connect:{
              id:  +updateReservationDto.userId
            }
          }
        },
        include:{
          user: true
        }
        
      })
      
  }
  
  

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
