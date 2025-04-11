import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * Indicates whether the account is active
   */
  @ApiPropertyOptional({
    description: 'Indicates whether the account is active',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  accountIsActive?: boolean;

  /**
   * The reservation ID associated with the user
   */
  @ApiPropertyOptional({
    description: 'The reservation ID associated with the user',
    example: 123,
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  reservationId?: number | null;

  /**
   * The password of the user
   */
  @ApiPropertyOptional({
    description: 'The password of the user',
    example: 'new_password',
  })
  @IsOptional()
  @IsString()
  password?: string;

  /**
   * The account type of the user
   */
  @ApiPropertyOptional({
    description: 'The account type of the user',
    example: 'admin',
  })
  @IsOptional()
  @IsString()
  accountType?: string;
}
