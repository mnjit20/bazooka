const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CreatorSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    creatorId:{type: Number},
    cat_id:{type: Schema.Types.ObjectId, ref:'Category'},
    user_id:{type: Number},
    name:{type: String},
    email:{type: String},
    phone_number:{type: String},
    reach:{type: String},
    fb_fan_count:{type: String},
    ig_followers_count:{type: String},
    channel_name:{type: String},
    youtubeChannelId:{type: String},
    yt_subscriber_count:{type: String},
    yt_imageUrl:{type: String},
    facebookId:{type: String},
    fb_coverPic:{type: String},
    instaUserName:{type: String},
    category_name:{type: String},
    user_state:{type: String},
    address:{type: String},
    isInf:{type: String},
    status:{type: String},
    onboard_flag:{type: String}, 
    createdon:{type: String},
    updatedon:{type: String, default:Date.now}
});

module.exports = mongoose.model('Creator', CreatorSchema);