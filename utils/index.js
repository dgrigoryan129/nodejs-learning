const sequelize = require('./database');
const {Event, Ticket} = require('../models/index')

sequelize
.autenticate()
.then(async () => {
    await Event.sync({force: true});
    await Ticket.sync({force: true});
})
.catch(err => {
    console.log(err)
})

const models = {
    Event: userModel(sequelize, Sequelize.DataTypes),
    Message: messageModel(sequelize, Sequelize.DataTypes)
}