const path = require('path');
const jimp = require('jimp');

const { catchAsyncError, ResError } = require("../../utilites");
const { updateUser } = require('../../services');

const patchAvatar = catchAsyncError(async (req, res, next) => {
  const fileName = JSON.stringify(req.user).slice(1, -1) + '.' + req.file.originalname.split('.').slice(-1);
  const avatarURL = path.join("avatars", fileName);
  
  const avatar = await jimp.read(req.file.path);
  avatar.resize(250, 250).write(path.join(__dirname, "../", "../", "public", avatarURL));
  
  const contact = await updateUser(req.user, { avatarURL });

  if (contact) {
    res.status(200).json({
      avatarURL: contact.avatarURL,
    });
  } else {
    next(new ResError(401, "Not authorized"));
  };
});

module.exports = patchAvatar;