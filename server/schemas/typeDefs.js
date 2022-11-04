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
    requests: String
}
type Event{
    _id: ID
    start: String
    end: String
    title: String
    createdAt: String
}
type Reservation{
    _id: ID
    start: String
    end: String
    username: String
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
    requests: [Reservation]
    request (_id: ID) : User 
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEvent(start: String!, end: String!, title: String!, createdAt: String): Event
    addReservation(username: String!, start:String, end:String): User
    deleteEvent(title:String!): Event
    updateEvent(title:String!): Event
}
`;

// export the typeDefs
module.exports = typeDefs;

