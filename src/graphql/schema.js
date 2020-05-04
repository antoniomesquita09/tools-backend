const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./type');
const resolvers = require('./resolver');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
