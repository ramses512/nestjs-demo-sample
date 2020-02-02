import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './dog.entity';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) { }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    try {
      return await this.dogsService.create(createDogDto);
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }
  @Put(':id')
  async update(@Body() dog: Dog, @Param('id') id) {
    try {
      return await this.dogsService.update(dog, id);
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }
  @Delete(':id')
  async delete(@Param('id') id) {
    try {
      return await this.dogsService.delete(id);
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    const dogs = await this.dogsService.findAll();
    if (dogs.length <= 0) {
      throw new NotFoundException('Without available dogs');
    }
    return dogs;
  }
}
