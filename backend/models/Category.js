const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CategorySchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id:{type: String},
    wall_cat:{type: String},
    wall_cat_hindi:{type: String},
    wall_cat_code:{type: String},
    wall_category_logo:{type: String},
    created_date:{type: String, default:Date.now},
    status:{type: String},
    cat_type:{type: String},
    type:{type: String},
    updatedon:{type: String, default:Date.now}  
});

module.exports = mongoose.model('Category', CategorySchema);