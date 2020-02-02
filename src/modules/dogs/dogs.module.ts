import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { dogsProviders } from './dogs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DogsController],
  providers: [DogsService, ...dogsProviders],
})
export class DogsModule {}
