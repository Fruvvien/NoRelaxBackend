import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private db: PrismaService){}

  create(createReservationDto: CreateReservationDto) {
    return 'This action adds a new reservation';
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

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
