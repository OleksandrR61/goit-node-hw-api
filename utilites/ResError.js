module.exports = class ResError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    };
};