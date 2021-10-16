import Post from '../../../models/Post';

export default {
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { postInput }) => Post.create(postInput),
    updatePost: (_, { id, postInput }) => Post.findOneAndUpdate(id, postInput, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  }
}