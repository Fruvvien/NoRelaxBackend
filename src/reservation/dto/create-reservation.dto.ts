import { IsBoolean, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateReservationDto {
    @IsDateString()
    reservationDate: Date

    @IsBoolean()
    isReserved: boolean

    @IsString()
    userId?: string |null
}
