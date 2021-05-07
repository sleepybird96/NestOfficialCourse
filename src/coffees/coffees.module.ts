import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: 'COFFEE_BRANDS',
      useFactory: async (connection: Connection): Promise<string[]> => {
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        return coffeeBrands;
      },
      inject: [CoffeeBrandsFactory],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
