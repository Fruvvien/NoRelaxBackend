import {  BadRequestException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private db: PrismaService){}

  async create(createReservationDto: CreateReservationDto) {
      const currentDate = new Date();
      const dateTime = new Date(createReservationDto.reservationDate);
      if(currentDate.getFullYear() <= dateTime!.getFullYear() &&  currentDate.getMonth() <= dateTime!.getMonth() && currentDate.getDay() <= dateTime!.getDay()){
        const response= await this.db.reservation.create({
          data:{
            isReserved: createReservationDto.isReserved,
            reservationDate: createReservationDto.reservationDate,
            tableNumber: createReservationDto.tableNumber,
            seats: createReservationDto.seats,
            user:{
              connect:{
                id:  +createReservationDto.userId
              }
            }
          },
          include:{
            user: true
          }
        })
  
        if(response){
          return response
        }
        else{
          return new BadRequestException()
        }
      }
      else{
        return new BadRequestException()
      }

     
    
      
    
    
    
  }

  async findAll() {
    return await this.db.reservation.findMany();
  }

  async findMany(id: number) {
    return await this.db.reservation.findMany({
      where:{
        userId: id
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
  
  

  async remove(id: number, userId: number) {
    return await this.db.reservation.delete({
      where:{
        id:id,
        userId: +userId
      }
    });
  }
}
