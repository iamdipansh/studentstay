const { verify } = require('crypto');
const mongoose = require('mongoose');
const { vendored } = require('next/dist/server/future/route-modules/app-page/module.compiled');
// const bcrypt = require('bcryptjs')
mongoose.set('strictQuery', false);

const user = mongoose.Schema({
    name : { type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    verifyed: {type: Boolean},
    pic: {type: String, default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'}

});

module.exports = mongoose.models.User || mongoose.model('User', user)
