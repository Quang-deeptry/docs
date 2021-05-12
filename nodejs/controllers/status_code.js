// Informational responses (100–199)
// Successful responses (200–299)
// Redirects (300–399)
// Client errors (400–499)
// Server errors (500–599)

// 200 OK => thanh cong 
// phu thuoc vao method: GET,HEAD,PUT,POST,TRACE

// 201 Created => thanh cong
// yeu cau thanh cong tra ve 1 tai nguyen moi duoc tao phu thuoc vao method: PUT, POST

// 204 => no content
// req.body khong co noi dung de gui yeu cau

// 400 Bad request => that bai
// may chu khong the yeu cau vi cu phap khong hop le

// 401 authorization => xac thuc that bai
// may chu yeu cau phai xac thuc chinh no moi co the di tiep vi du trong jsonwebtoken hay su dung

// 402 payment required => yeu cau can thanh toan
// yeu cau can thanh toan => muc dich phan hoi trong tuong lai

// 403 fobidden => khong co quyen truy cap
// khi tuy cap vao duong dan nao do nhung khong duoc phep truy cap, hoac ko du quyen truy cap

// 404 not found => khong tim thay tai nguyen
// phia server khong tim thay tai nguyen duoc yeu cau gui len 

// 500 interval server error => ko biet xu ly the nao
// bo tay .com thi nen su dung cai nay cho le

