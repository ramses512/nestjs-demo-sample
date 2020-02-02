import { Inject, ForbiddenException, NotFoundException, Injectable } from '@nestjs/common';
import { CreateCaretakerDto } from './dto/create-caretaker.dto';
import { Model } from 'sequelize-typescript';
import { Caretaker } from './caretaker.entity';

@Injectable()
export class CaretakersService {
  constructor(
    @Inject('CaretakersRepository') private readonly caretakersRepository: typeof Caretaker,
  ) { }

  async create(createCaretakerDto: CreateCaretakerDto): Promise<Caretaker> {
    const caretaker = new Caretaker();
    caretaker.firstName = createCaretakerDto.firstName;
    caretaker.lastName = createCaretakerDto.lastName;
    caretaker.email = createCaretakerDto.email;
    caretaker.phone = createCaretakerDto.phone;
    caretaker.birthDate = createCaretakerDto.birthDate;
    caretaker.address = createCaretakerDto.address;
    return await caretaker.save();
  }

  // tslint:disable-next-line:ban-types
  async update(caretaker: Caretaker, _id): Promise<[Number, Caretaker[]]> {
    if (!await this.findById(_id)) {
      throw new NotFoundException('Caretaker not found');
    }
    return await this.caretakersRepository.update(
      {
        ...caretaker,
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
      throw new NotFoundException('Caretaker not found');
    }
    return await this.caretakersRepository.destroy({
      where: {
        id: _id,
      },
    });
  }

  async findById(id): Promise<Caretaker> {
    if (!id) {
      throw new ForbiddenException('The id cannot empty');
    }
    return await this.caretakersRepository.findOne<Caretaker>(id);
  }

  async findAll(): Promise<Caretaker[]> {
    return await this.caretakersRepository.findAll<Caretaker>();
  }
}
