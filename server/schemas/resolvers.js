const { AuthenticationError } = require('apollo-server-express');

const User = require("../models/User")
const Event = require("../models/Event")
const Reservation = require("../models/Reservation")

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find();
        },
        // get one user by username
        user: async (parent, {username}) => {
            return User.findOne({username})
        },
        // find all events
        events: async () => {
            return Event.find();
        },
        // find one event
        event: async (parent, { _id}) => {
            return Event.findOne({_id})
        },
       // delete event
        // find all requests
        requests: async () => {
            return Reservation.find()
        }
    },
    Mutation: {
        // add user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        // add login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        // add event
        addEvent: async (parent, args) => {
            return  Event.create(args);
        },
        // delete event-  Should we add authentication
        deleteEvent: async (parent, {title}) => {
            return Event.findOneAndDelete({title})
        },
        // update event - owner only (can delete and add work?)
        updateEvent: async (parent, { title }) => {
            return Event.findOneAndUpdate({title, start, end})
        },
        // add reservation
        addReservation: async (parent, args, context) => {
            if (context.user) {
                const request = await Reservation.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { request: request.id } },
                    { new: true }
                );
                return User
            }
            throw new AuthenticationError("You need to log in first!");
        }
        // update reservation
    }
};

module.exports = resolvers;