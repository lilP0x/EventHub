import { User } from './user.js';

export class Supplier extends User {
    constructor(idSupplier, name, mail, password, phoneNumber, address) {
        super(name, mail, password); // Llamada al constructor de la clase base
        this.idSupplier = idSupplier;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.spaces = [];
    }

    createSpace(space) {
        this.spaces.push(space);
    }
}