const catchAsyncError = require("./catchAsyncError");
const ResError = require('./ResError');
const saltPassword = require('./saltPassword');
const sendMail = require('./sendMail');

module.exports = {
    catchAsyncError,
    ResError,
    saltPassword,
    sendMail,
};