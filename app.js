const express = require('express');
const bp = require('body-parser');
const path = require('path');

const {conn} = require('./utils/database');
const errorUtil = require('./utils/error');

const eventRouter = require('./routes/eventsRoute');
const usersLoginRouter = require('./routes/login');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

// db.execute('SELECT * FROM events')
// .then((res) => {
//     console.log(res[0])
//     return res
// });

app.use(bp.urlencoded({ extended: false }));

app.use(eventRouter);
app.use(usersLoginRouter);

app.use(errorUtil.get404);

conn.sync({ force : false}).then(()=> app.listen(8080))