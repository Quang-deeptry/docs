// yarn add speakingurl => create slug
// express-minify-html => express middleware (req, res),{hello: 'hello world'},fnc(err, html) doi tuong giam thieu html 
// node-minify => toi uu file static nhu css js trong public toi uu dung luong doan code qua viec ma hoa doan code thanh .min.css or .min.js
// compression => nen du lieu o phia server va giai nen ra o phia client "nhung phai dam bao du lieu ko thay doi"
// helmet => toi uu bao mat web nodejs chong hacker xam pham
// ejs-locals => them cai chuc nang layout, partial, block vao trong ejs
// express-session => luu tru du lieu session tren phia client, la mot middleware trong expressjs gom set get va destroy
// connect-flash => hien thi thong bao den ng dung vi du: res.flash("info", "your name") kq nhan dc o file ejs la : message.info
// method-override => la mot phuong thuc ghi de truoc khi thuc hien mot phuong thuc khac noi cu the hon
// la khi ta dung phuong thuc method=POST ghi de "DELETE" o phia action action="/response?_method=DELETE";
// serve-favicon => dat favicon lam anh dai dien cho website tren muc tieu de 
// app.use('/', favicon('./src/public/favicon.ico'));
// flash trong nodejs la phan hien thi mot doan thong bao den nguoi dung => sau khi hien thi mot khoang thoi gian nhat dinh thong bao se tu dong xoa
// axios => fetch du lieu
// bcryptjs => ma hoa password bang genSalt
// body-parser => la middleware khi nhan du lieu nhap vao thu phia client gui len server qua function(req, res, next)
// cheerio => noi chung cung k can su dung cai nay lam gi
// connect-mongo => connect vs mongodb
// dotenv => la module ko phu thuoc tai cac bien moi truong tu .env vao process.env => la noi luu tru cau hinh trong moi truong tach biet.
// express-validator => la mot middleware kiem tra cac truong duoc yeu cau duoc gui len tu phia client truoc khi xu ly luu tru du lieu
// helmet => toi uu bao mat, la mot package trong npm gom 14 middleware nho xu ly viec loc cac http doc hai nham khai thac lo hong XSS
// express-rate-limit => chong DOS, DDOS bla bla chua tim hieu
// serve-favicon => doc cai ten cung de hieu thoi ma, hien thi bieu tuong icon tren trinh duyet web cua ban
// sitemap-generator => sitemap cho nodejs, tao so do trang web = cach thu thap du lieu trang web cua ban


/// dev
// cross-env => tao NAME_ENV trong packages.json "start": "cross-env NAME_ENV='product node server.js'" 

/// services
// fcm-node => 
// node-geocoder => ma hoa dia ly trong google
// jsonwebtoken => ma hoa password
// nodemailer => la mot mudule dung de gui mail
// redis => la mot cai gi do bro vai chuong luon, giup hien thi du lieu vs toc do nhanh hon khi su dung redis
// aws-sdk => cai nay cua amazon s3 dung de cai dat truoc khi upload anh len aws s3
// multer-s3-transform => ho tro da tang cho multer
// multer => upload anh len server
// sharp => config hinh anh duoc gui len tu phia ng dung, thay doi kich thuoc, chat luong bla bla
// node-schedule => bo dem thoi gian, len lich tgian, noi chung lien quan den thoi gian
