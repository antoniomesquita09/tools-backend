// const _ = require('lodash');

const tools = require('./tools/resolver');
const author = require('./author/resolver');

const query = {
  Query: {
    ...tools.Query,
    ...author.Query,
  },
};

const mutation = {
  Mutation: {
    ...tools.Mutation,
    ...author.Mutation,
  },
};

module.exports = {
  ...author,
  ...tools,
  ...query,
  ...mutation,
};
