const sequelize = require('../utils/database');
const Sequalize = require('sequelize');
// const Ticket = require('./ticket.model');

module.exports = (sequelize) => {
    sequelize.define('event',{
    eventId: {
        type: Sequalize.CHAR(4),
        allowNull: false,
        primaryKey: true
    },
    eventName: Sequalize.STRING,
    createdAt: Sequalize.DATE,
    tickets:Sequalize.DOUBLE,
    createdBy: Sequalize.CHAR(45)
    // tickets: [Ticket]
});

// Event.beforeSync(()=> console.log('Events beforesync'));
// Event.afterSync(()=> console.log('Events aftersync'));
}


// module.exports = class Event{
//     constructor(id, eventName, tickets, createdBy){
//         this.id = id;
//         this.eventName = eventName;
//         this.tickets = tickets;
//         this. createdBy = createdBy;
//     }
//     static getAllEvents (){
//         return db.execute('SELECT * FROM events')
//     }

//     static getEventDetails (id){
//         return db.execute('SELECT * FROM events WHERE events.eventId = ?', [id]);
//     }
// }