const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const message = mongoose.Schema({
    sender:{ type: mongoose.Schema.ObjectId, ref: 'User'},
    content:{ type: String, trim: true},
    chat:{ type: mongoose.Schema.ObjectId, ref: 'Chat'}
},
{timestamp: true})
module.exports = mongoose.models.Message || mongoose.model('Message', message)