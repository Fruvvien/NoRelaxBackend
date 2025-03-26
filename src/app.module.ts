import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { ReservationsModule } from './reservations/reservations.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { FoodDrinkProductsModule } from './food-drink-products/food-drink-products.module';

@Module({
  imports: [UserModule, AuthModule, LoginModule,ReservationsModule, OrdersModule, ProductsModule, FoodDrinkProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
