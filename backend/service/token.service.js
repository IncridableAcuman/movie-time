const jwt = require('jsonwebtoken')
const Token = require('../model/token.model')
class TokenService {

    generateToken(payload) {
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, { expiresIn: '30d' });
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, { expiresIn: '15m' })
        return { accessToken, refreshToken };
    }

    async saveToken(userId, refreshToken) {
        const user = await Token.findOne({ user: userId });
        if (user) {
            user.refreshToken = refreshToken;
            return user.save();
        }
        const token = await Token.create({ user: userId, refreshToken });
        return token;
    }
    async findToken(refreshToken){
        return await Token.findOne({refreshToken});
    }
    async removeToken(refreshToken){
        return await Token.findOneAndDelete({refreshToken});
    }
    validateAccessToken(accessToken){
        try {
            return jwt.verify(accessToken,process.env.JWT_ACCESS);
        } catch (error) {
            return null;
        }
    }
    validateRefreshToken(refreshToken){
        try {
            return jwt.verify(refreshToken,process.env.JWT_REFRESH);
        } catch (error) {
            return null;
        }
    }
}
module.exports = new TokenService();