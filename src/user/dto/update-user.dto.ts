import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsBoolean()
  @IsOptional()
  accountIsActive?: boolean;

  @IsNumber()
  @IsOptional()
  reservationId?: number | null;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  accountType?: string;
}
