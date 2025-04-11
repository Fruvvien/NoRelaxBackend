import { Controller} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('auth')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
}
