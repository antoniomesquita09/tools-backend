const { gql } = require('apollo-server');

module.exports = gql`
  type Author {
    id: ID!
    name: String!
    email: String!
    github: String
  }

  extend type Query {
    getAuthors: [Author]
  }

  extend type Mutation {
      createAuthor(name: String!, email: String!, github: String): Author
      updateAuthor(id: ID!, name: String, email: String, github: String): Author
      deleteAuthor(id: ID!): Author
  }
`;
