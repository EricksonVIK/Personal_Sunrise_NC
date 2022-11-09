const mongoose = require('mongoose');

// tells which database to connect - MONGODB_URI is the heroku app in environmental variable
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/personalsunrise",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
    },
    console.log(" -----🌐Connected to MongoDB!🌐-----")
),

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;