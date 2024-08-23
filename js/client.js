import { User } from './user.js';

export class Client extends User {
    constructor(name, mail, password, phoneNumber) {
        super(name, mail, password);
        this.phoneNumber = phoneNumber;
        this.bookings = [];
    }

    // Método para añadir un espacio
    createBooking(booking) {
        this.bookings.push(booking);
    }

    
}
