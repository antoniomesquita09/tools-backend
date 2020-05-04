const Author = require('../../models/author');

module.exports = {
  Author: {
    id: (author) => author.id,
    name: (author) => author.name,
    github: (author) => author.github,
    email: (author) => author.email,
  },
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
    updateAuthor: async (_, input) => {
      const { id } = input;
      const author = await Author.findOneAndUpdate(id, input, { new: true });
      return author;
    },
    deleteAuthor: async (_, { id }) => {
      await Author.findByIdAndRemove(id);
    },
  },
};
