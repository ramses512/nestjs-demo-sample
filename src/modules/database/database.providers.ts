import { Sequelize } from 'sequelize-typescript';
import { Caretaker } from '../caretakers/caretaker.entity';
import { Dog } from '../dogs/dog.entity';
import { CaretakerSeeder } from '../caretakers/caretaker.seeder';
import { DogSeeder } from '../dogs/dog.seeder';

const myBol = true;
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'animals',
      });
      sequelize.addModels([Caretaker, Dog]);
      await sequelize.sync({ force: myBol });
      if (myBol) {
        new CaretakerSeeder();
        new DogSeeder();
      }
      return sequelize;
    },
  },
];
