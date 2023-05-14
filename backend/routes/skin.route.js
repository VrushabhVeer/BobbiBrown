const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { SkinModel } = require("../models/skin.model");
const skinRoute=Router();


skinRoute.get("/",async(req,res)=>{
    const posts = await SkinModel.find()
    res.send(posts);
})
skinRoute.post("/",async(req,res)=>{
    const payload = req.body;
    try{
        const post = await SkinModel.insertMany(payload);
        res.send(post);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})

module.exports={
    skinRoute
}