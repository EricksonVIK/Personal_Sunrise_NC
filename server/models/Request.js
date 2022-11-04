const { Schema, model, Types } = require("mongoose")

const RequestSchemna = new Schema(
    {
        start: {
            type: Date,
        },
        end: {
            type: Date,
        },
        name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must match an email address!"],
          },
    }
)

const Request = model("Request", RequestSchemna)

module.exorts = Request;

// can we pull name and email from username? with user array