const Repositories = require('../../models/repositories');
const Author = require('../../models/author');

module.exports = {
  Repository: {
    id: (repo) => repo.id,
    name: (repo) => repo.name,
    author: (repo) => repo.author,
    description: (repo) => repo.description,
    link: (repo) => repo.link,
    techs: (repo) => repo.techs,
    tags: (repo) => repo.tags,
  },
  Query: {
    getRepositories: async () => {
      const repos = await Repositories.find().populate('author');
      return repos;
    },
  },
  Mutation: {
    saveRepository: async (_, input) => {
      const repo = await Repositories.create(input);
      const { author } = input;
      const newAuthor = await Author.findById(author);
      repo.author = newAuthor;
      await repo.save();
      return repo.populate('author');
    },
    updateRepository: async (_, input) => {
      const { id } = input;
      const repo = await Repositories.findOneAndUpdate(id, input, { new: true }).populate('author');
      return repo;
    },
    deleteRepository: async (_, { id }) => {
      await Repositories.findByIdAndRemove(id);
    },
  },
};
