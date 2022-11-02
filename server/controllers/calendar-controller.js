const router = require("express").Router();
const Event = require("../models/Event");
const moment = require("moment");

router.post("/create-event", async (req, res) => {
  const event = Event(req.body);
  await event.save();
  res.sendStatus(201);
});

router.get("/get-event", async (req, res) => {
  const events = await Event.find({
    start: { $gte: moment(req.query.start).toDate() },
    end: { $lte: moment(req.query.end).toDate() },
  });
});

module.exports = router;
