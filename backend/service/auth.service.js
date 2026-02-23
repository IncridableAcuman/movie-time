const User = require('../model/user.model')
const bcrypt = require('bcryptjs');
const BaseError = require('../error/base.error')
const UserDto = require('../dto/user.dto');
const tokenService = require('./token.service')
class AuthService {

    async register(username, email, password) {
        const existUser = await User.findOne({ email });
        if (existUser) {
            throw BaseError.BadRequest("User already exist");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashPassword });
        const dto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...dto });
        await tokenService.saveToken(dto.id, tokens.refreshToken);
        return { dto, ...tokens }
    }
    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw BaseError.NotFound("User not found");
        }
        isCurrectPassword = await bcrypt.compare(password, user.password);
        if (!isCurrectPassword) {
            throw BaseError.BadRequest("Invalid password")
        }
        const dto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...dto });
        await tokenService.saveToken(dto.id, tokens.refreshToken);
        return { dto, ...tokens }
    }
    async refresh(refreshToken) {
        if (refreshToken === null) {
            throw BaseError.UnAuthorized();
        }
        const payload = await tokenService.validateRefreshToken(refreshToken);
        const dbToken = await tokenService.findToken(refreshToken);
        if (!payload || !dbToken) {
            throw BaseError.UnAuthorized();
        }
        const user = await User.findById(payload.id);
        if (!user) {
            throw BaseError.NotFound("User not found");
        }
        const dto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...dto });
        await tokenService.saveToken(dto.id, tokens.refreshToken);
        return { dto, ...tokens }
    }
    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }
    async forgotPassword(email) {

    }
    async resetPassword(token, password) {

    }

}
module.exports = new AuthService();