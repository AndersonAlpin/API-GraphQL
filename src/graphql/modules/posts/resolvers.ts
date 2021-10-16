import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
  Post: {
    author: async (post) => await User.findById(post.author),
  },
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    createPost: async (_, { postInput }) => await Post.create(postInput),
    updatePost: async (_, { id, postInput }) => await Post.findByIdAndUpdate(id, postInput, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findByIdAndDelete(id)),
  }
}