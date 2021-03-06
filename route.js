const express = require("express");

const route = express.Router();

const TweetController = require("./controllers/TweetController");
const LikeController = require("./controllers/LikeController");
/*route.get("/",(red, res)=>{
    return res.send("oi mumndo");
});*/

route.get("/tweets", TweetController.index);
route.post("/tweets", TweetController.store);

route.post('/likes/:id', LikeController.store);
//route.post("/likes/:id", LikeController.store);
module.exports = route;