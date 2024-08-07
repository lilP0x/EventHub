import { User } from './user.js';

export class Supplier extends User {
    Supplier(idSupplier, name, mail, password, phoneNumber, address) {
        super(name, mail, password);
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.spaces = [];
    }

    // Método para añadir un espacio
    createSpace(space) {
        this.spaces.push(space);
    }
}
