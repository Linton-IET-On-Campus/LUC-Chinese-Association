const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const image = req.body.image;
    const venue = req.body.venue;
    const time = req.body.time;
    const date = Date.parse(req.body.date);
    const description = req.body.description;
    const duration = Number(req.body.duration);

    const newEvent = new Event({
        username,
        name,
        image,
        venue,
        time,
        date,
        description,
        duration
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.username = req.body.username;
            event.name = req.body.name;
            event.image = req.body.image;
            event.venue = req.body.venue;
            event.time = req.body.time;
            event.date = Date.parse(req.body.date);
            event.description = req.body.description;
            event.duration = Number(req.body.duration);

            event.save()
                .then(() => res.json('Event updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;