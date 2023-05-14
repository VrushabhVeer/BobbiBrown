const mongoose = require("mongoose");

const bestsellerSchema = mongoose.Schema({
    image : String,
    name : String,
    tag: String,
    price : Number,
    userID : String
}) 

const BestsellerModel = mongoose.model("bestseller",bestsellerSchema);

module.exports={
    BestsellerModel,
}