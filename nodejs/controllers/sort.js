conditionSort = {} ;

// sap xep data theo createAt or isBlocked + createAt blabla
switch (+sort) {
  case 2:
    conditionSort.createdAt = 1;
    break;
  case 3:
    conditionSort.isBlocked = -1;
    conditionSort.createdAt = -1;
    break;
  case 4:
    conditionSort.isBlocked = 1;
    conditionSort.createdAt = -1;
    break;
  default:
    conditionSort.createdAt = -1;
}

// khi query sort 
const getPosts = BlogPost
  .find()
  // tim den thuoc tinh cua bang blogpost co ten categories
  //match => check thuoc tinh isPublish: true bla bla cua bang categories
  // select => lay 1 thuoc tinh name cua bang categories
  .populate({
    path: 'categories',
    match: { isPublished: true, deletedAt: { $exists: false } },
    select: 'name',
  })
  .populate({
    path: 'tags',
    match: { isPublished: true, deletedAt: { $exists: false } },
    select: 'name',
  })
  // select => lay cac thuoc tinh cua bang blog post
  .select('title category tags isPublished createdAt')
  // sap xep data dua tren thuoc tinh dc them vao trong sort(thuoc tinh)
  .sort(conditionSort)
  // gioi han post tren moi trang
  .limit(perPage)
  // skip => co cong thuc tinh moi page lay bai bai viet hien tai * cho so trang hien tai - 1
  .skip(perPage * (currentPage - 1))
  // query nhanh hon voi lean, bo qua viec khoi tao toan bo tai lieu
  // cung cap cho ban tai lieu can lay
  .lean();
  // neu dung lean thi k dung save khi create data
  // thay vao do dung Model.create(data);

// check curren page
// if khong co bien page thi no se duoc default: 1 
// neu co bien page vi du page = 1 thi page se +page len = 2 
Match.ceil((!page || page <= 0) ? 1 :+page);

// tim hieu ve query find voi fuzzySearch
// regex loai bo nhung khoang trang trong phan noi dung tim kiem
// duoc di kem thuat toan du doan duoc ngon ngu trong van ban cua ban
// neu ban nhap quag => no se hieu ban dang viet quang, quang cao bla bla
// hoac hoag xuan quan => hoang xuan quang, hoang xuan quan bla bla 
const regex = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// gi => g la tim tat ca cac tai lieu tien quan 
// i => bo qua mot vai truong hop khong can thiet
return new RegExp(regex, 'gi');