class AppError {
    message;
    statusCode;

    constructor (message, statuscode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;