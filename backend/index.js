const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { connection } = require("./config/db");
const routes = require("./routes/user.route");
const { authenticate } = require("./middleware/authenticate.middleware");
const { bestsellerRoute } = require("./routes/bestseller.route");
const { makeupRoute } = require("./routes/makeup.route");
const { skinRoute } = require("./routes/skin.route");
const { cartRoute } = require("./routes/cart.route");

const app = express();
app.use(express.json());

app.use(cors({origin:"*"}));
// app.use("/",(err,res)=>{
//     res.send("welcome to the nike backend");
//     console.log("welcome to the nike backend");
// })

app.use("/user",routes)
app.use("/bestseller",bestsellerRoute);
app.use("/makeup",makeupRoute)
app.use("/skin",skinRoute);
app.use(authenticate);
app.use("/cart",cartRoute);
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to mongo");
    }
    catch(err){
        console.log("msg:",err);
    }
    console.log(`connected to port ${process.env.port} successfully`)
})

