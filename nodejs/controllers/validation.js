// ObjectId.isValid trong js
// kiem tra thuoc tinh id co phai la dang ObjectId 
// duoc dinh dang trong mongdb hay k 
ObjectId.isValid(id) 
// hoac su dung regexp de check objectId
var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
checkForHexRegExp(id);

// express-validation
// check(ten thuoc tinh trong bang)
module.exports = {
  checkPost: [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('slug').not().isEmpty().withMessage('Slug is required'),
    check('image').not().isEmpty().withMessage('Image is required'),
    check('description').not().isEmpty().withMessage('Description is required'),
    check('content').not().isEmpty().withMessage('Content is required'),
  ],
};
// them vao router
router.get("/abc", checkPost, abcController);