// const _ = require('lodash');

const repository = require('./repository/resolver');
const author = require('./author/resolver');

const query = {
  Query: {
    ...repository.Query,
    ...author.Query,
  },
};

const mutation = {
  Mutation: {
    ...repository.Mutation,
    ...author.Mutation,
  },
};

module.exports = {
  ...author,
  ...repository,
  ...query,
  ...mutation,
};
