require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const schema = require('./graphql/schema');

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development',
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = server;
