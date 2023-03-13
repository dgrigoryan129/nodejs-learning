const path = require('path');

const express = require('express');

const eventController = require('../controllers/events');

const router = express.Router();

router.get('/', eventController.getAllEvents);

router.get('/events/:eventId', eventController.getEventDetails);


module.exports = router;