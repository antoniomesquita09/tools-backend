const Tool = require('../../models/tools');
const Author = require('../../models/author');

module.exports = {
  Query: {
    getTools: async () => {
      const tools = await Tool.find().populate('author');
      return tools;
    },
  },
  Mutation: {
    saveTool: async (_, input) => {
      const tool = await Tool.create(input);
      const { author } = input;
      const newAuthor = await Author.findById(author);
      tool.author.push(newAuthor);
      await tool.save();

      return tool.populate('author');
    },
    updateTool: async (_, input) => {
      const { id } = input;
      const tool = await Tool.findOneAndUpdate(id, input, { new: true }).populate('author');
      return tool;
    },
    deleteTool: async (_, { id }) => {
      await Tool.findByIdAndRemove(id);
    },
  },
};
