const authService = require('../service/auth.service')

class AuthController {

    async register(req, res, next) {
        try {
            const { username, email, password } = req.body;
            const user = await authService.register(username, email, password);
            res.cookie('refreshToken', user.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await authService.login(email, password);
            res.cookie('refreshToken', user.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            return res.json(user)
        } catch (error) {
            next(error);
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const user = await authService.refresh(refreshToken);
            res.cookie('refreshToken', user.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
             await authService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return res.json({ message: "You have successfully logged out." })
        } catch (error) {
            next(error);
        }
    }
    async forgotPassword(req, res, next) {
        try {
            const { email } = req.body;
            await authService.forgotPassword(email);
            return res.json({ message: 'Reset password link sent to email.' })
        } catch (error) {
            next(error);
        }
    }
    async resetPassword(req, res, next) {
        try {
            const { username, email, password } = req.body;
            await authService.register(username, email, password);
            return res.json({ message: "Password updated successfully" })
        } catch (error) {
            next(error);
        }
    }

}
module.exports = new AuthController();