// require aws-sdk 
const AWS = require('aws-sdk');
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
