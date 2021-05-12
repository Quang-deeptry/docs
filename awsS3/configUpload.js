// quangdeeptry10@gmail.com  Vocabulary90014
// require multer
const multer = require('multer');

const multerStorage = multer.memoryStorage();

/// middleware

// kiem tra file nao duoc se bo qua va file nao khong bo qua
const multerFilter = (req, file, cb) => {
  // check is image
  if (file.mimetype.startsWith('image')) {
    // neu file nay la image thi true file nay se duoc upload va khong bo qua
    cb(null, true);
  } else {
    // file nay ko file image thi false se khong dc upload va bo qua
    cb('Please upload only images.', false);
  }
};

// storage luu image trong memoryStorate();
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// upload nhieu hinh anh su dung fields 2 file name cover va images
// gioi han so luong file duoc tai len maxCount
const uploadFiles = upload.fields([
  { name: 'cover', maxCount: 1 },
  { name: 'images', maxCount: 6 },
]);

// kiem tra xe file duoc tai len se nhu nao
uploadImages: (req, res, next) => {
  uploadFiles(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.json({
        status: 200,
        message: 'success',
        payload: { message: err },
      });
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.json({
          status: 200,
          message: 'success',
          payload: { message: err.code },
        });
      }
    }

    if (err) {
      return res.json({
        status: 200,
        message: 'success',
        payload: { message: 'not file image' },
      });
    }
    return next();
  });
}

/// controller modules insertOne data image

// neu 2 file files.images va files.cover co 
// map in images
if (req.files.images) {
  await Promise.all(
    req.files.images.map(async (file) => {
      const newFilename = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      await sharp(file.buffer)
        .resize({ width: 650, height: 320, fit: sharp.fit.cover })
        .toFormat('jpeg')
        .jpeg({ quality: 70 })
        .toFile(`public/uploads/${newFilename}`);

      req.body.images.push(newFilename);
    }),
  );
}
// map in cover
if (req.files.cover) {
  await Promise.all(
    req.files.cover.map(async (file) => {
      const newFilename = `${Date.now()}-${Math.round(Math.random() * 1e8)}`;
      await sharp(file.buffer)
        .resize({ width: 650, height: 320, fit: sharp.fit.cover })
        .toFormat('jpeg')
        .jpeg({ quality: 70 })
        .toFile(`public/uploads/cover/${newFilename}`)
        .catch((err) => {
          throw err;
        });
      req.body.cover.push(newFilename);
    }),
  );
}

// create image
for (let i = 0; i < req.body.images.length; i++) {
  const images = {
    alt: req.files.images[i].originalname,
    src: `http://localhost:8000/uploads/${req.body.images[i]}`,
  };
  const imageSave = await Images.create(images);
  imageProduct.push(imageSave._id);
}