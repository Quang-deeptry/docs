// require multer 
const multer = require('multer');
// require aws-sdk 
const AWS = require('aws-sdk');

// new AWS s3
// access key AWS_ID 
// secred key AWS_SECRED 
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRED,
});

// multer setting memoryStorage
// destination thu muc luu tru => luu tru tam thoi
// lien quan den buffer
const storage = multer.memoryStorage({
  destination: function(req, file, callback ) {
    callback(null, '');
  }
});

// upload single file image 
// single() co the thay = fields 
const upload = multer({storage}).single('image');

// tach image.jpg => lay ten duoi jpg
const myFile = req.file.originalname.split('.');
const fileType = myFile[myFile.length - 1];

// tao param cho s3.upload(param, callback);
const params = {
  Bucket: process.env.AWS_BUCKET_NAME,
  Key: `${uuidv4()}.${fileType}`,
  // lay request.file.buffer lam body
  Body: req.file.buffer,
  // public-read doc file image
  ACL:'public-read',
}

// s3.upload => upload file len aws s3 
s3.upload(params, function(err,data) {
  if(err) return res.status(500).send('fail');
  return res.status(200).send('success');
});

// config update key id va secred key
AWS.config.update({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRED,
});
const s3 = new AWS.S3();

// get all image 
const data = await s3.listObjectsV2({
  Bucket: process.env.AWS_BUCKET_NAME,
}).promise();
