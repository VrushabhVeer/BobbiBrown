const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { BestsellerModel } = require("../models/bestseller.model");
const bestsellerRoute=Router();


bestsellerRoute.get("/",async(req,res)=>{
    const posts = await BestsellerModel.find()
    res.send(posts);
})
bestsellerRoute.post("/",async(req,res)=>{
    const payload = req.body;
    try{
        const post = await BestsellerModel.insertMany(payload);
        res.send(post);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})

module.exports={
    bestsellerRoute
}