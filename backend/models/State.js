const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StateSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  status: { type: String }
});

module.exports = mongoose.model("State", StateSchema);
