const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { MakeupModel } = require("../models/makeup.model");
const makeupRoute=Router();


makeupRoute.get("/",async(req,res)=>{
    const posts = await MakeupModel.find()
    res.send(posts);
})
makeupRoute.post("/",async(req,res)=>{
    const payload = req.body;
    try{
        const post = await MakeupModel.insertMany(payload);
        res.send(post);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})

module.exports={
    makeupRoute
}