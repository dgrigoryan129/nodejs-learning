const sequelize = require('../utils/database');
const Sequalize = require('sequelize');

// module.exports = class Ticket{
//     construtor(eventId,ticketPrice, ticketPlaceDescription){
//         this.eventId = eventId;
//         this.ticketPrice = ticketPrice;
//         this.ticketPlaceDescription = ticketPlaceDescription;
//     }

//     static getEventTickets = (eventId) => {
//         return db.execute('somesqlcodetofetchtickets')
//     }
// }


module.exports = (sequelize) => {
    sequelize.define('ticket',{
    ticketId: {
        type: Sequalize.CHAR(4),
        allowNull: false,
        primaryKey: true
    },
    ticketDesc: Sequalize.STRING,
});
}