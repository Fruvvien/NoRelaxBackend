import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { FoodDrinkProductsModule } from './food-drink-products/food-drink-products.module';
import { ReservationModule } from './reservation/reservation.module';
import { OrderItemModule } from './order-item/order-item.module';

@Module({
  imports: [UserModule, AuthModule, LoginModule, OrdersModule, ProductsModule, FoodDrinkProductsModule, ReservationModule, OrderItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
