// toan tu && 
// co nghia la neu exprire1 bien doi = false thi nguoc lai tra ve exprire2
exprire1 && exprire2 
// typeof kiem tra kieu bien duoc goi 
typeof BienA
// vi du:  typeof bienA === "object" && bienA.length > 0
// toan tu instanceof
// toan tu instanceof kiem tra mot phuong thuc khoi tao xem co xuat hien trong
// chuoi nguyen mau cua mot doi tuong hay khong?? 
// vi du: const A = "aldlakdlkasldklasd", const B = new C("asd", "AD");
// instanceof A String => true, instanceof B String => false
instanceof BienA 
// dau ... trong js
// duoc goi la toan tu spread
// cho phep mo rong tai cho khi co nhieu tham so hoac nhieu phan tu
const A = [1, 2, 3];
const B = [...A, 4, 5, 6];
// toan tu 2 dau thang !!
// chuyen doi mot bien thanh dang boolean de danh gia if else cua bien do
const a = 0;
if(!!a) return console.log("oh a");
// hoac nhu the nay
const a = 0;
if(a ? true : false) return console.log("oh a");
// lam tron so le 1.8 => 2, 1.4 => 1
Match.ceil();