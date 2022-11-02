const { Schema, model, Types } = require("mongoose");


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
            default:Date.now,
        }
    },
);

const Event = model("Event", EventSchema);

module.exports = Event;