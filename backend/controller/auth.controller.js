const authService = require('../service/auth.service')

class AuthController {

    async register(req, res, next) {
        try {
            const { username, email, passwrod } = req.body;
            const user = await authService.register(username, email, passwrod);
            res.cookie('refreshToken', user.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
        } catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {

    }
    async refresh(req, res, next) {

    }
    async logout(req, res, next) {

    }
    async forgotPassword(req, res, next) {

    }
    async resetPassword(req, res, next) {

    }

}
module.exports = new AuthController();