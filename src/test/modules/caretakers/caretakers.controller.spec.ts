import { Test } from '@nestjs/testing';
import { CaretakersController } from '../../../modules/caretakers/caretakers.controller';
import { CaretakersService } from '../../../modules/caretakers/caretakers.service';

describe('CaretakersController', () => {
  let caretakersController: CaretakersController;
  let caretakersService: CaretakersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        controllers: [CaretakersController],
        components: [CaretakersService],
      }).compile();

    caretakersService = module.get<CaretakersService>(CaretakersService);
    caretakersController = module.get<CaretakersController>(CaretakersController);
  });

  describe('findAll', () => {
    it('should return an array of caretakers', async () => {
      const result = ['test'];
      jest.spyOn(caretakersService, 'findAll').mockImplementation(() => result);

      expect(await caretakersController.index('a')).toBe(result);
    });
  });
});