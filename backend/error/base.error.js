module.exports = class BaseError extends Error {
    constructor(status,message,errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnAuthorized() {
        return new BaseError(401, message="Unauthorized!")
    }
    static BadRequest(message="Bad Request", errors = []) {
        return new BaseError(400, message, errors);
    }
    static NotFound(message="Not Found", errors = []) {
        return new BaseError(404, message,errors);
    }
    static ServerError(message="Internal Server Error"){
        return new BaseError(500,message);
    }
}