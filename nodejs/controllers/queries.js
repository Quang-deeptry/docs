// show data cua modelPosts se lay duoc cac thuoc tinh trong modelCategories
const getPosts = modelPosts.find(objectData).populate({
  path: "categories",
  // phu thuoc vao do tuoi duoc dat trong match de hien thi cac truong hop dung dieu kien
  match: { $age: 21 },
  // lay title trong bang categories
  select: "category"
});

// dem so luong bai viet cua bang Post
BlogPost.countDocuments(conditionFind);
// lam tron so le 1.8 => 2, 1.4 => 1
Match.ceil();
