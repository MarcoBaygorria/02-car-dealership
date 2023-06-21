import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Decorador
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
