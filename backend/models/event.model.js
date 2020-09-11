const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    venue: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;