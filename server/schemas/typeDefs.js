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
type Auth {
    token: ID!
    user: User
  }
type Query {
    users: [User]
    user(username: String!): User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

// export the typeDefs
module.exports = typeDefs;

