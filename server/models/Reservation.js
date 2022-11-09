const { Schema, model, Types, now } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const ReservationSchemna = new Schema({
	start: {
		type: Date,
	},
	end: {
		type: Date,
	},
	username: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, 'Must match an email address!'],
	},
	createdAt: {
		type: Date,
		default: now(),
	},
})

const Reservation = model('Reservation', ReservationSchemna)

module.exports = Reservation
