const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
    user:{
        type:Schema.ObjectId,
        ref:'User',
    },
    refreshToken:{
        type:String,
        required:true
    }
});
const Token=model('Token',TokenSchema);
module.exports=Token;