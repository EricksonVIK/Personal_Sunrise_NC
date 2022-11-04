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
        // find all requests
        requests: async () => {
            return Reservation.find()
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
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
        addEvent: async (parent, args) => {
            return  Event.create(args);
        },
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
    }
};

module.exports = resolvers;