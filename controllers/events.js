const Event = require('../models/event')

exports.getAllEvents = (req, res, next) => {
    Event.getAllEvents()
    .then((data) => {
        // console.log(data[0], 'rows')
        res.render('shop/index', {
            prods:data[0],
            pageTitle: 'Home',
            path: '/'
        })
        // res.send(`<h1>${data[0][0].eventName}</h1>`)
    })
    .catch(err => console.log(err))
}

exports.getEventDetails = (req, res, next) => {
    const id = req.params.eventId
    console.log(id,'id')
    Event.getEventDetails(id)
    .then( ([event]) => {
        console.log(event[0], 'detail')
        res.render('shop/product-detail', {
            product: event[0],
            pageTitle: event.eventName,
            path: '/events'
          });
    })
}