import { Caretaker } from './caretaker.entity';

export const caretakersProviders = [
  {
    provide: 'CaretakersRepository',
    useValue: Caretaker,
  },
];
