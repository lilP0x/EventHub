// models/Reservation.js
export class Booking {
    constructor(id, date, startTime, endTime, totalCost, client, space) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalCost = totalCost;
        this.client = client;
        this.space = space;
    }
}
