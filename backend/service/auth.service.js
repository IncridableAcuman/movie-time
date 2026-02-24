const User = require('../model/user.model')
const bcrypt = require('bcryptjs');
const BaseError = require('../error/base.error')
const UserDto = require('../dto/user.dto');
const tokenService = require('./token.service');
const mailService = require('./mail.service');

const SALT = 10;

class AuthService {

    async register(username, email, password) {
        const existUser = await User.findOne({ email });
        if (existUser) {
            throw BaseError.BadRequest("User already exist");
        }
        const salt = await bcrypt.genSalt(SALT);
        const hashPassword = await bcrypt.hash(password, salt);
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
        const isCurrectPassword = await bcrypt.compare(password, user.password);
        if (!isCurrectPassword) {
            throw BaseError.BadRequest("Invalid password")
        }
        const dto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...dto });
        await tokenService.saveToken(dto.id, tokens.refreshToken);
        return { dto, ...tokens }
    }
    async refresh(refreshToken) {
        if(!refreshToken){
            throw BaseError.UnAuthorized();
        }
        const payload = tokenService.validateRefreshToken(refreshToken);
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
        if(!refreshToken){
            throw BaseError.BadRequest("Refresh token is required");
        }
        return await tokenService.removeToken(refreshToken);
    }
    async forgotPassword(email) {
        const user = await User.findOne({ email });
        if (!user) {
            throw BaseError.NotFound("User not found");
        }
        const dto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...dto });
        mailService.sendMail(dto.email, `http://localhost:5173/reset-password?token=${tokens.accessToken}`);
    }
    async resetPassword(token, password) {
        const payload = tokenService.validateAccessToken(token);
        if (!payload) {
            throw BaseError.UnAuthorized();
        }
        const user = await User.findById(payload.id);
        if (!user) {
            throw BaseError.NotFound("User not found");
        }
        const salt = await bcrypt.genSalt(SALT);
        const hashPassword = await bcrypt.hash(password, salt);
        user.password = hashPassword;
        await user.save();
    }

}
module.exports = new AuthService();