const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const FacebookpostSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id:{type: String},
    creatorid:{type: String, ref:'Creator'},
    postId:{type: String},
    type:{type: String},
    link:{type: String},
    message:{type: String},
    picture:{type: String},
    full_picture:{type: String},
    created_time:{type: String},
    permalink_url:{type: String},
    likes_count:{type: String},
    comments_count:{type: String},
    createdon:{type: String},
    updatedon:{type: String}
});

module.exports = mongoose.model('Facebookpost', FacebookpostSchema);