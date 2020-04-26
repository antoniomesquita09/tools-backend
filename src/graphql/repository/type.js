const { gql } = require('apollo-server');

module.exports = gql`
  type Repository {
    id: String!
    name: String!
    author: Author!
    description: String
    link: String
    techs: [String]
    tags: [String]
  }

  type Query {
    getRepositories: [Repository]
  }

  type Mutation {
    saveRepository(
        name: String!
        author: String!
        description: String
        link: String
        techs: [String]
        tags: [String]
        ): Repository

    updateRepository(
        id: String!
        name: String
        description: String
        link: String
        techs: [String]
        tags: [String]
        ): Repository

    deleteRepository(id: String!): Repository
  }
`;
