const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const YoutubepostSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    creatorid:{type: String, ref:'Creator'},
    //creatorid:{type: Schema.Types.ObjectId, ref:'Creator'},
    channelId:{type: String},
    videoId:{type: String},
    viewCount:{type: String},
    likeCount:{type: String},
    dislikeCount:{type: String},
    favoriteCount:{type: String},
    commentCount:{type: String},
    etag:{type: String},
    publishedAt:{type: String},
    title:{type: String},
    description:{type: String},
    channelTitle:{type: String},
    imageUrl:{type: String},   
    medium_imageUrl:{type: String},
    high_imageUrl:{type: String},
    createdon:{type: String},
    updatedon:{type: String}
});

module.exports = mongoose.model('Youtubepost', YoutubepostSchema);