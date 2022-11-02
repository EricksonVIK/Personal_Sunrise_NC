require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(require("./routes"));
app.use("/api/calendar", require("./controllers/calendar-controller"))

// tells which database to connect - MONGODB_URI is the heroku app in environmental variable
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/calendar",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    console.log(" -----🌐Connected to MongoDB!🌐-----")
),

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`--🌍 Connected on localhost:${PORT}🌍--`));