import Post from '../../../models/Post';

export default {
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    createPost: async (_, { postInput }) => await Post.create(postInput),
    updatePost: async (_, { id, postInput }) => await Post.findOneAndUpdate(id, postInput, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  }
}