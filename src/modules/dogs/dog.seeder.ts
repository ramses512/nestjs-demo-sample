import { Dog } from './dog.entity';

export class DogSeeder {
    constructor() {
        new Dog({ name: 'Pep', caretakerId: 1, gender: 'Macho', breed: 'Pastos Alemán', age: 2, size: 'Grande', description: 'Soy un perro' }).save();
        new Dog({ name: 'Juan', caretakerId: 1, gender: 'Macho', breed: 'Golden retriever', age: 3, size: 'Grande', description: 'Soy un perro' }).save();
        new Dog({ name: 'Juana', caretakerId: 1, gender: 'Hembra', breed: 'Bodeguero', age: 1, size: 'Pequeño', description: 'Soy un perro' }).save();
        new Dog({ name: 'Bruno', caretakerId: 1, gender: 'Macho', breed: 'Labrador', age: 5, size: 'Mediano', description: 'Soy un perro' }).save();
        new Dog({ name: 'Ana', caretakerId: 1, gender: 'Hembra', breed: 'Teckel', age: 9, size: 'Pequeño', description: 'Soy un perro' }).save();
    }
}