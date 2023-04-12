const multer = require('multer');
const path = require('path');

const { ResError } = require('../utilites');

const multerConfig = multer.diskStorage({
    destination: path.join(__dirname, "../", "temp"),
});

const multerFilter = (req, file, fn) => {
  if (file.mimetype.startsWith('image')) {
    fn(null, true);
  } else {
    fn(new ResError(400, "Upload image please"), false);
  }
};

const upload = multer({
    storage: multerConfig,
    fileFilter: multerFilter,
}).single('avatar');

module.exports = upload;