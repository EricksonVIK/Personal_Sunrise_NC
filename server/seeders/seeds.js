// const mongoose = require('mongoose');
const db = require('../config/connections');
// require models
const  User  = require("../models/User");


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

    await User.insertMany(ownerSeed);
    
    console.log("Owners added");

    process.exit(0);
});

