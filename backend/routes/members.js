const router = require('express').Router();
let Member = require('../models/member.model');

router.route('/').get((req, res) => {
    Member.find()
        .then(members => res.json(members))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Member.findById(req.params.id)
        .then(members => res.json(members))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Member.findByIdAndDelete(req.params.id)
        .then(() => res.json('Member deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newMember = new Member({ username });

    newMember.save()
        .then(() => res.json('Member added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
