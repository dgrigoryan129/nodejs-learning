const {Event} = require('../utils/database')

exports.getAllEvents = async (req, res, next) => {
    Event.findAll()
    .then((data) => {
        console.log(data, 'rows')
        res.render('shop/index', {
            prods:data,
            pageTitle: 'Home',
            path: '/'
        })
    })
    .catch(err => console.log(err))
}

exports.getEventDetails = (req, res, next) => {
    const id = req.params.eventId
    console.log(id,'id')
    Event.findAll({
        where: {
          eventId: id
        }
      })
    .then( (event) => {
        console.log(event, 'detail')
        res.render('shop/product-detail', {
            product: event[0],
            pageTitle: event.eventName,
            path: '/events'
          });
    })
}