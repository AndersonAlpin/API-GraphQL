import User from '../../../models/User';

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { userInput }) => await User.create(userInput),
    updateUser: async  (_, { id, userInput }) => await User.findOneAndUpdate(id, userInput, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  }
}