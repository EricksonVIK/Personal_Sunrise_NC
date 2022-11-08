const { Schema, model, Types, now } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const EventSchema = new Schema({
	start: {
		type: Date,
	},
	end: {
		type: Date,
	},
	title: {
		type: String,
		required: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: now(),
	},
})

const Event = model('Event', EventSchema)

module.exports = Event
