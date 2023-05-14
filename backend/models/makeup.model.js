const mongoose = require("mongoose");

const makeupSchema = mongoose.Schema({
    image : String,
    name : String,
    tag: String,
    price : Number,
    userID : String
}) 

const MakeupModel = mongoose.model("makeup",makeupSchema);

module.exports={
    MakeupModel,
}