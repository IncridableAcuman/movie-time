const BaseError = require("../error/base.error")
const tokenService = require("../service/token.service")

module.exports  = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            return next(BaseError.UnAuthorized())
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return next(BaseError.UnAuthorized());
        }
        const payload = tokenService.validateAccessToken(token);
        if (!payload) {
            return next(BaseError.UnAuthorized());
        }
        req.user = payload;
        next()
    } catch (error) {
        return next(BaseError.UnAuthorized());
    }
}
