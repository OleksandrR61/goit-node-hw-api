const bcrypt = require('bcrypt');

const saltPassword = password => {
    return bcrypt.hash(password, 12)
};

module.exports = saltPassword;