const db = require('../utils/database');

module.exports = class Ticket{
    construtor(eventId,ticketPrice, ticketPlaceDescription){
        this.eventId = eventId;
        this.ticketPrice = ticketPrice;
        this.ticketPlaceDescription = ticketPlaceDescription;
    }

    static getEventTickets = (eventId) => {
        return db.execute('somesqlcodetofetchtickets')
    }
}