import mongoose from 'mongoose';
const { Schema } = mongoose;


const UserSchema = Schema({
    username:
    {
        type: String,
        required: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    __v: {
        type: Number,
        select: false
    },
});


UserSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model('User', UserSchema);