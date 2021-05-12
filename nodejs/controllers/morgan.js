const fs = require('fs');
const morgan = require('morgan');

// trong packages.json su dung start
// "start": "cross-env NODE_ENV=production node app.js",

// process.env.NODE_ENV => "start" : "NODE_ENV=production"
if (process.env.NODE_ENV === 'production') {
  const dir = './logs';

  // existsSync => nhan vao string,url, buffet tra ve true or false
  if (!fs.existsSync(dir)) {
    // mkdirSync => tao tu muc co ten trong bien dir
    fs.mkdirSync(dir);
  }
  // morgan combined => ghi lai cac phan loi trong request luu dia chi ip trong, trinh duyet cua ng dung dang co xam nhap he thong
  // luu data trong logs/access.log
  app.use(morgan('combined', {
    // tao luong ghi o che do noi them
    stream: fs.createWriteStream(`${__dirname}/logs/access.log`, { flags: 'a' }),
  }));

  // hoac nhu the nay 
  app.use(morgan('combine', {
    // interval : 1d => xoay hang ngay, 
    // var rfs = require('rotating-file-stream') // version 2.x
    // rotating-file-stream cai them packages nay vao
    stream: fs.createStream('access.log', { interval: '1d', path: path.join(__dirname, 'log')})
  }));
} else {
  app.use(morgan('dev'));
}