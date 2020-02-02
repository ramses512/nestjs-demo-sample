import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Res, ValidationPipe, ParseIntPipe, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateCaretakerDto } from './dto/create-caretaker.dto';
import { CaretakersService } from './caretakers.service';
import { Caretaker } from './caretaker.entity';

@Controller('caretakers')
export class CaretakersController {
  constructor(private readonly caretakersService: CaretakersService) { }
  @Get()
  async index(@Res() res): Promise<Caretaker[]> {
    const caretakers = await this.caretakersService.findAll();
    if (caretakers.length <= 0) {
      throw new NotFoundException('Without available caretakers');
    }
    return res.status(HttpStatus.OK).json(caretakers);
  }

  @Get(':id')
  async show(@Res() res, @Param('id', new ParseIntPipe()) id): Promise<Caretaker[]> {
    try {
      const caretaker = await this.caretakersService.findById(id);
      return res.status(HttpStatus.CREATED).json(caretaker);
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }

  @Post()
  async create(@Res() res, @Body(new ValidationPipe()) createCaretakerDto: CreateCaretakerDto) {
    try {
      await this.caretakersService.create(createCaretakerDto);
      return res.status(HttpStatus.CREATED).send('Created successfully');
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }
  @Put(':id')
  async update(@Res() res, @Body(new ValidationPipe()) caretaker: Caretaker, @Param('id', new ParseIntPipe()) id) {
    try {
      await this.caretakersService.update(caretaker, id);
      return res.status(HttpStatus.OK).send('Updated successfully');
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }
  @Delete(':id')
  async delete(@Res() res, @Param('id', new ParseIntPipe()) id) {
    try {
      await this.caretakersService.delete(id);
      return res.status(HttpStatus.OK).send('Deleted successfully');
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }
}
