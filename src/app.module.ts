import { Module } from '@nestjs/common';
import { DogsModule } from './modules/dogs/dogs.module';
import { CaretakersModule } from './modules/caretakers/caretakers.module';

@Module({
  imports: [DogsModule, CaretakersModule],
})
export class ApplicationModule { }
