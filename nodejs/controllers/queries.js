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

// lookup trong query mongoose
// from la ten bang, localField la ten truong cua mot bang khac
// foreignField la mot truong trong tenBang 
// as la la mot cai ten gi do minh thich dat sao cung, kieu nhu 1 bien dau` ra
lookup({
  from: 'tenBang', localField: '_id', foreignField: 'categories', as: 'posts',
})
// project trong query mongoose
// name va createAt la 2 thuoc tinh trong Post
// gia tri name: 1 => 1 or true la van giu quyen gia tri cua ten bang khi goi ra
//  totalPosts va totalChildren lay thuoc tinh cua as tren lookup
Post.find().project({ name: 1,createdAt: 1,totalPosts: { $size: '$posts' },totalChildren: { $size: '$children' },
});