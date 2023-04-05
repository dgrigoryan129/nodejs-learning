const mysql = require('mysql2');
const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path')

const sequelize = new Sequelize('Test_schema', 'root', 'mysqleight', {
    dialect: 'mysql',
     host: 'localhost'
});


const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '..', '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname,'..', '/models', file)));
  });
console.log(modelDefiners)
modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);



const { Event, Ticket, User } = sequelize.models;

Ticket.beforeSync(()=> console.log('tickets beforesync'));
Ticket.afterSync(()=> console.log('tickets aftersync'))

Event.hasMany(Ticket,{
   as: 'EID',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
});

Ticket.belongsTo(Event, {
  as: 'EID',
  foreignKey: "fk_EID"
});

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'Test_schema',
//     password: 'mysqleight',
// });

// module.exports = pool.promise();
module.exports = {
    ...sequelize.models,
    conn: sequelize, 
  };