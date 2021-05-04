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

// trim trong model => loai bo khoang cach cua 2 dau van bang 
// vi du : " jaskdjkd asdklksd " => "jaskdjkd asdklksd"
trim: true 

// ref trong model => lien ket giua cac bang 
// vi du : model_A = { name: String, cates: { ref: "model_a" } }, model_B = { name: String, cates: { ref: "model_b" } };
ref: "model_name"

// model.index
tagSchema.index({ slug: 1 }, { background: true, unique: true });
