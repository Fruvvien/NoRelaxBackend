import { PartialType } from '@nestjs/swagger';
import { CreateReservationDto } from './create-reservation.dto';
import { IsBoolean, IsDateString, isNumber, IsNumber, IsString } from 'class-validator';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
    @IsDateString()
    reservationDate: Date
    
    @IsBoolean()
    isReserved: boolean

    @IsString()
    userId?: string |null
}
