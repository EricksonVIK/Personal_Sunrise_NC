// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
// Queries - users - find, user - findOne
// Mutations - user - addOne, user-delete, user-update
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    loginType: String
}
type Event{
    _id: ID
    start: String
    end: String
    title: String
    createdAt: String
}
type Auth {
    token: ID!
    user: User
  }
type Query {
    users: [User]
    user(username: String!): User
    events: [Event]
    event(_id: ID!): Event
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEvent(start: String!, end: String!, title: String!, createdAt: String): Event
}
`;

// export the typeDefs
module.exports = typeDefs;

