// thay the populate 
// model 1
const categories = {
  category: {
    ref: 'blog_categories'
  },
};
// model 2
const blogPost = {
  categories: {
    ref: 'blog_categories'
  },
};

const modelCategories = mongoose.model('blog_categories', categories);
const modelPosts = mongoose.model('blog_posts', blogPost);

