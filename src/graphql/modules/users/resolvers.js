import User from '../../../models/User';

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { userInput }) => User.create(userInput),
    updateUser: (_, { id, userInput }) => User.findOneAndUpdate(id, userInput, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  }
}