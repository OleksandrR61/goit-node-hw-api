const ResError = require("./ResError");

const catchAsyncError = func => (req, res, next) => func(req, res, next).catch(error => 
    next(new ResError(500, error.message))
);

module.exports = catchAsyncError;