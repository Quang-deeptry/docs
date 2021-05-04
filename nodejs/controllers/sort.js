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

// format date str
// vidu 123193891238 => 12/2/2002
formatDate: (dateTimeStr) => {
  const dateTime = new Date(dateTimeStr);

  return (`${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`);
}

// truncate text => cat bot van ban trong 1 chuoi cac ky tu duoc hien thi
// limit mac dinh = 65 minh the tuy chinh limit nhu sau `truncateText(text, 100)`;
truncateText: (txt, limit = 65) => {
  if (txt.length <= limit) return txt;

  return `${txt.slice(0, limit).trim()}...`;
}

// count per page => so luong san pham hien thi moi trang
(no, currentPage, perPage = 20) => perPage * (currentPage - 1) + 1 + no;

// asyncForEach
// vi du req.body => tags = { name: "quang ne" }
asyncForEach: async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}
// xu ly asyncForEach tren
// them 1 array rong const arrayId = [];
// neu item la 1 objectId thi se push vao arrayId sau cung` se create vao Model
asyncForEach(array, (item) => {
  if(ObjectId.isvalid(item)) {
    arrayId.push(item);
  }else {
    const createItem = Model.create(item);
    arrayId.push(createItem._id);
  }
  Model.create({item: arrayId});
});

// genCryptoToken(size) => random cryptoToken 
// tra ve 1 promise voi 1 chuoi crypto duoc random = size nhap vao 
// token.toString('hex') => bien token = 1 chuoi hex bien doi token tu dang thap phan sang thap phan luc
genCryptoToken: (size = 20) => (
  new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buf) => {
      if (err) reject(err);
      const token = buf.toString('hex');
      resolve(token);
    });
  })
); 