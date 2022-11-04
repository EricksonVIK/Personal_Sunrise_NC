const { Schema, model, Types } = require("mongoose");
const dateFormat = require('../utils/dateFormat')

const EventSchema = new Schema(
    {
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
            default:timestamp => dateFormat(timestamp),
        }
    },
);



const Event = model("Event", EventSchema);

module.exports = Event;