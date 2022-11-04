const { AuthenticationError } = require('apollo-server-express');

const User = require("../models/User")
const Event = require("../models/Event")

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
        }
    }
};

module.exports = resolvers;