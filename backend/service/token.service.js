const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
    refreshToken: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
const Token = model('Token', TokenSchema);
export default Token;