const { gql } = require('apollo-server');

module.exports = gql`
  type Tool {
    id: String!
    name: String!
    author: Author!
    description: String
    tags: [String]
  }

  type Query {
    getTools: [Tool]
  }

  type Mutation {
    saveTool(
        name: String!,
        author: String!,
        description: String,
        tags: [String]
        ): Tool

    updateTool(
        id: String!,
        name: String,
        description: String,
        tags: [String],
        ): Tool

    deleteTool(id: String!): Tool
  }
`;
