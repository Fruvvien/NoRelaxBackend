import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemDto {

    @ApiProperty({
        description: 'The name of the product',
        example: 'Borsodi csapolt',
    })
    @IsString()
    productName: string;
    
    @ApiProperty({
        description: 'The unit of the product (e.g., piece, kg, etc.)',
        example: '0.5l',
    })
    @IsString()
    unit: string;

    @ApiProperty({
        description: 'The price of the product',
        example: 12.99,
    })
    @IsNumber()
    price: number;

    @ApiProperty({
        description: 'The quantity of the product ordered',
        example: 2,
    })
    @IsNumber()
    quantity: number;

    @ApiProperty({
        description: 'The ID of the associated order',
        example: 1,
    })
    @IsNumber()
    orderId: number;
}