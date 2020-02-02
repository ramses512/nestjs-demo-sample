import { Dog } from './dog.entity';

export const dogsProviders = [
  {
    provide: 'DogsRepository',
    useValue: Dog,
  },
];
