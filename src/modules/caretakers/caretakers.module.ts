import { Module } from '@nestjs/common';
import { CaretakersController } from './caretakers.controller';
import { CaretakersService } from './caretakers.service';
import { caretakersProviders } from './caretakers.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CaretakersController],
  providers: [CaretakersService, ...caretakersProviders],
})
export class CaretakersModule {}
