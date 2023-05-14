const mongoose = require("mongoose");

const skinSchema = mongoose.Schema({
    image : String,
    name : String,
    tag: String,
    price : Number,
    userID : String
}) 

const SkinModel = mongoose.model("skin",skinSchema);

module.exports={
    SkinModel,
}