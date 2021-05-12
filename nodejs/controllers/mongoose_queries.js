// link mongodb operator query
// https://docs.mongodb.com/manual/reference/operator/query/

// tinh toan thong tin tu nhieu bang => cho ra ket qua thong tin can thiet
// tuong tu nhu group by
db.collection.aggregate();
// chi dinh fields muon truy van
// data = [{_id: 1,name: "abc", password: "123alda123$$!!lk3", createAt: 123}, {_id: 1,name: "abc", password: "123alda123$$!!lk3", createAt: 123}]
// => [{_id: 1,name: "abc", password: "123alda123$$!!lk3"}, {_id: 1,name: "abc", password: "123alda123$$!!lk3"}]
project({
  _id,
  name,
  password,
});
// project trong query mongoose
// name va createAt la 2 thuoc tinh trong Post
// gia tri name: 1 => 1 or true la van giu quyen gia tri cua ten bang khi goi ra
//  totalPosts va totalChildren lay thuoc tinh cua as tren lookup
Post.find().project({ name: 1,createdAt: 1,totalPosts: { $size: '$posts' },totalChildren: { $size: '$children' },
});
// match => chon 1 thuoc tinh trong bang muon truy van
// data = [ {id: 1, isRoot: false}, {id: 2, isRoot: true} ] => [{id: 1, isRoot: false}];
match({'role.isRoot' : false})
// limit => gioi han so luong san pham hien thi
// data = [ {id: 1, isRoot: false}, {id: 2, isRoot: true} ] => [{id: 1, isRoot: false}];
limit(1)
// bỏ qua san pham nhất định tren 1 trang
// moi trang se co 20sp duoc hien thi
// data = [ {id: 1, isRoot: false}, {id: 2, isRoot: true} ] => [{id: 2, isRoot: true}];
skip(1)
// sort => sap xep danh san san pham theo 1 thuoc tinh chi dinh
// createAt : -1 => sap xep create at moi den cu~
// data = [ {id: 1, isRoot: false, createAt: 122}, {id: 2, isRoot: true, createAt: 123} ] => [{id: 2, isRoot: true, createAt: 122}, {id: 1, isRoot: true, createAt: 123}];
sort({'createAt' : -1})
// lookup trong query mongoose
// from la ten bang categories, localField la ten truong cua bang Posts
// foreignField la mot truong trong categories 
// as la la mot cai ten gi do minh thich dat sao cung dc, kieu nhu 1 bien dau` ra
// Posts = [
  // {id: 1, name: "abc", categories: "123$!dasda123"}, 
  // =>  {id: 1, name: "abc", post: {_id: "123$!dasda123", category_name: "name ne"}}, 
Posts.lookup({
  from: 'categories', localField: '_id', foreignField: 'category_name', as: 'post',
})
// unwind => thuc hien mo rong tren mot mang, tao 1 output san pham cho gia tri trong mang do
// Post = [{id: 1, name: "a", categoies: ["a", "b", "c"]}]
// => {id: 1, name: "a", categories: "a"}, {id: 1, name: "a", categories: "b"}, {id: 1, name: "a", categories: "c"}
unwind("$post")

// countDocuments => tra ve ket qua so luong san pham trong 1 bang
// dem so luong cua posts trong khoang thoi gian lon hon ngay 04/05/2021 va gioi han 200 san pham duoc hien thi
Posts.countDocuments({ odlDate: {$gt: new Date('04/05/2021')}, limit: 200 });

// show data cua modelPosts se lay duoc cac thuoc tinh trong modelCategories
const getPosts = modelPosts.find(objectData).populate({
  // bang categories
  path: "categories",
  // phu thuoc vao do tuoi duoc dat trong match de hien thi cac truong hop dung dieu kien
  match: { $age: 21 },
  // lay title trong bang categories
  select: "category"
});

// get modelPosts co _id: 1 va lay _id cua bang categories
const getPost = modelPosts.find({_id: 1}).populate('categories', '_id');