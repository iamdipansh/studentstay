const mongoose = require('mongoose');
const { type } = require('os');

mongoose.set('strictQuery', false);

const post = mongoose.Schema({
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    area: {type: String},
    address:{ type: String, default: "address"},
    appartment_type:{ type: String},
    frunishing:{ type: String},
    property_for:{ type: String},
    available_within:{ type: String},
    price:{ type: Number},
    parking:{ type: String},
    picse: [String],
    likes:{type: Number},
    booked:{ type: Boolean, default: false},
    rating:{ type: String}

},{timestamps: true})

post.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 });

module.exports = mongoose.models.Post ||mongoose.model('Post', post)
