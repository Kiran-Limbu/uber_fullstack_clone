const mongoose = require('mongoose');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            require: true,
            minlength: [4, 'First name must be at least 4 characters long'],
        },
        lastname: {
            type: String,
            minlength: [4, 'First name must be at least 4 characters long'],
        }
    }, 
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: [5, 'Email must be at be at least 5 characters long']
    }, 
    password: {
        type: String,
        require: true,
        select: false
    }, 
    socketId: {
    type: String,
},
});

userSchema.method.generateAuthToken = () =>{
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async (password) =>{
    return await bycrpt.compare(password, this.password);
}

userSchema.static.hashPasseord = async (password) => {
    return await bycrpt.hash(password, 10);
}