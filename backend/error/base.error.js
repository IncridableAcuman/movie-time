module.exports = class BaseError extends Error {

    status;
    error;
    constructor(message) {
        super(message);
        this.status = this.status;
        this.error = this.error;
    }
    static UnAuthorized() {
        return new BaseError(401, "Unauthorized!")
    }
    static BadRequest(message, errors = []) {
        return new BaseError(400, message, errors);
    }
    static NotFound(message, errors = []) {
        return new BaseError(404, message);
    }
}