const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    id: Schema.ObjectId,
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 255
    }
}, { timestamps: true });

const User = model('User', UserSchema);
export default User;