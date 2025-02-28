import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinksController } from './drinks.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DrinksController],
  providers: [DrinksService, PrismaService],
})
export class DrinksModule {}
