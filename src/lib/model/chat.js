const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const chat = mongoose.Schema({
    chatName:{ type: String, trim: true},
    users:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    lastMessage:{type: mongoose.Schema.Types.ObjectId, ref: 'Message'},
},
{timestamps: true})
module.exports = mongoose.models.Chat || mongoose.model('Chat', chat)