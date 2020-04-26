const Author = require('../../models/author');

module.exports = {
  Query: {
    getAuthors: async () => {
      const authors = await Author.find();
      return authors;
    },
  },
  Mutation: {
    createAuthor: async (_, input) => {
      const author = await Author.create(input);
      return author;
    },
  },
};
