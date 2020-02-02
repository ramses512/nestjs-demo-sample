import { Caretaker } from './caretaker.entity';

export class CaretakerSeeder {
    constructor() {
        new Caretaker({ firstName: 'Juan', lastName: 'Martinez', email: 'test@gmail.com', phone: '678453432', birthDate: '1991-09-23', address: 'Soy un perro' }).save();
        new Caretaker({ firstName: 'Margarita', lastName: 'Pastrana', email: 'test@gmail.com', phone: '678453432', birthDate: '1991-09-23', address: 'Soy un perro' }).save();
    }
}