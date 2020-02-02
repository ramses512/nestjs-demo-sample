import { Inject, ForbiddenException, NotFoundException, Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { Model } from 'sequelize-typescript';
import { Dog } from './dog.entity';

@Injectable()
export class DogsService {
  constructor(
    @Inject('DogsRepository') private readonly dogsRepository: typeof Dog,
  ) { }

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const dog = new Dog();
    dog.name = createDogDto.name;
    dog.gender = createDogDto.gender;
    dog.breed = createDogDto.breed;
    dog.age = createDogDto.age;
    dog.size = createDogDto.size;
    dog.description = createDogDto.description;
    return await dog.save();
  }

  // tslint:disable-next-line:ban-types
  async update(dog: Dog, _id): Promise<[Number, Dog[]]> {
    if (!await this.findById(_id)) {
      throw new NotFoundException('Dog not found');
    }
    return await this.dogsRepository.update(
      {
        ...dog,
      },
      {
        where: {
          id: _id,
        },
      },
    );

  }

  // tslint:disable-next-line:ban-types
  async delete(_id: number): Promise<Number> {
    if (!await this.findById(_id)) {
      throw new NotFoundException('Dog not found');
    }
    return await this.dogsRepository.destroy({
      where: {
        id: _id,
      },
    });
  }

  async findById(id): Promise<Dog> {
    if (!id) {
      throw new ForbiddenException('The id cannot empty');
    }
    return await this.dogsRepository.findOne<Dog>(id);
  }

  async findAll(): Promise<Dog[]> {
    return await this.dogsRepository.findAll<Dog>();
  }
}
