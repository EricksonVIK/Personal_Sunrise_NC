// const mongoose = require('mongoose');
const db = require('../config/connections');
// require models
const User = require("../models/User");
const Event = require("../models/Event")


db.once("open", async () => {
    // create user data
    const ownerSeed = [
        {
            username: "cserickson",
            email: "chris@personalsunrisenc.com",
            password: "beachrespite617",
            loginType:"owner"
        },
        {
            username: "merickson",
            email: "melissa@personalsunrisenc.com",
            password: "beachrespite617",
            loginType: "owner"
        }
    ];
    // create test events
    const eventSeed = [
        {
            start: new Date ("November 3, 2022"),
            end: new Date("November 5, 2022"),
            title: "Test Event 1"
        },
        {
            start: new Date("November 6, 2022"),
            end: new Date ("November6, 2022"),
            title: "Test Event #2"
        }
    ]

    await User.deleteMany({});
    await User.insertMany(ownerSeed);
    await Event.deleteMany({});
    await Event.insertMany(eventSeed);
    
    console.log("Owners added");

    process.exit(0);
});

