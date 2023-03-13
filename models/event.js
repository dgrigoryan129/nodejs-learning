const db = require('../utils/database')

module.exports = class Event{
    constructor(id, eventName, tickets, createdBy){
        this.id = id;
        this.eventName = eventName;
        this.tickets = tickets;
        this. createdBy = createdBy;
    }
    static getAllEvents (){
        return db.execute('SELECT * FROM events')
    }

    static getEventDetails (id){
        return db.execute('SELECT * FROM events WHERE events.eventId = ?', [id]);
    }
}