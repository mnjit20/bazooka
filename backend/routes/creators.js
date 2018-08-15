const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Post model
const Creator = require("../models/Creator");
const Category = require("../models/Category");
const Youtubepost = require("../models/Youtubepost");
const Facebookpost = require("../models/Facebookpost");

router.get("/test/:creatorID", (req, res) => {
  Facebookpost.find({ creatorid: req.params.creatorID })
    .exec()
    .then(result => res.status(200).json(result))
    .catch();
});

router.get("/all", (req, res) => {
  res.status(200).json("test page");
});

//list of all creators and influencer
router.post("/all", (req, res) => {
  Creator.find({ reach: { $gt: 0 } })
    .sort({ reach: -1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .limit(50)
    .populate("cat_id", ["wall_cat", "wall_cat_code"])
    .exec()
    .then(creators => {
      const response = {
        count: creators.length,
        creator: creators.map(creator => {
          return {
            name: creator.name,
            _id: creator._id,
            reach: creator.reach,
            cat_id: creator.cat_id,
            channel_name: creator.channel_name,
            category_name: creator.category_name,
            fb_fan_count: creator.fb_fan_count,
            yt_subscriber_count: creator.yt_subscriber_count,
            ig_followers_count: creator.ig_followers_count,
            address: creator.address,
            yt_imageUrl: creator.yt_imageUrl,
            isInf: creator.isInf,
            status: creator.status
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(error => res.json(error));
});

//list of influencr
router.post("/influencer", (req, res) => {
  Creator.find({ reach: { $gt: 50000 } })
    .sort({ reach: -1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .populate("cat_id", ["wall_cat", "wall_cat_code"])
    .exec()
    .then(creators => {
      const response = {
        count: creators.length,
        creator: creators.map(creator => {
          return {
            name: creator.name,
            _id: creator._id,
            reach: creator.reach,
            cat_id: creator.cat_id,
            channel_name: creator.channel_name,
            category_name: creator.category_name,
            fb_fan_count: creator.fb_fan_count,
            yt_subscriber_count: creator.yt_subscriber_count,
            ig_followers_count: creator.ig_followers_count,
            address: creator.address,
            yt_imageUrl: creator.yt_imageUrl,
            isInf: creator.isInf,
            status: creator.status
          };
        })
      };
      res.status(200).json(response);
    });
});

router.get("/list/:youtube?/:facebook?/:insta?/:limit?", (req, res) => {
  const yt = req.params.youtube;
  const fb = req.params.facebook;
  const insta = req.params.insta;
  const reactLimit = req.params.reactLimit;

  console.log("yt ", yt, " fb ", fb, " insta ", insta);

  const query = {};

  //const query = { category_name: "Entertainment" };
  Creator.find({
    /*category_name: ["Health", "Auto"],*/
    reach: { $gt: 0 },
    fb_fan_count: { $gt: 3382, $lt: 18503 }
  })
    .sort({ reach: -1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .limit(30)
    .populate("cat_id", ["wall_cat", "wall_cat_code"])
    .exec()
    .then(creators => {
      const response = {
        count: creators.length,
        creator: creators.map(creator => {
          return {
            /*name: creator.name,
            _id: creator._id,
            reach: creator.reach,
            cat_id: creator.cat_id,
            channel_name: creator.channel_name,
            category_name: creator.category_name,
            fb_fan_count: creator.fb_fan_count,
            ig_followers_count: creator.ig_followers_count,
            yt_subscriber_count: creator.yt_subscriber_count,*/
            name: creator.name,
            _id: creator._id,
            reach: creator.reach,
            cat_id: creator.cat_id,
            channel_name: creator.channel_name,
            category_name: creator.category_name,
            fb_fan_count: creator.fb_fan_count,
            yt_subscriber_count: creator.yt_subscriber_count,
            ig_followers_count: creator.ig_followers_count,
            address: creator.address,
            yt_imageUrl: creator.yt_imageUrl,
            isInf: creator.isInf,
            status: creator.status,
            user_state: creator.user_state
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err =>
      res.status(400).json({
        error: err
      })
    );
});

router.post("/dashboard", (req, res) => {
  const yt = req.params.youtube;
  const fb = req.params.facebook;
  const insta = req.params.insta;
  const reactLimit = req.params.reactLimit;

  const aa = {
    cat_ids_arr: ["Health", "Auto"],
    socialsorting: ["1", "2"],
    state: "State",
    reach_min: 0,
    reach_max: 9000000
  };

  const reqBody = req.body;
  console.log("reqBody --- ", req.body.cat_ids_arr);
  var search_query = {};

  const reqBodyKeys = Object.keys(req.body);

  console.log("reqBodyKeys", reqBodyKeys);
  reqBodyKeys.forEach(key => {
    console.log("checking===", key);
    console.log(req.body[key]);

    if (key == "cat_ids_arr") {
      //console.log(reqBody[key]);
      //console.log("key found", key, reqBody);
      console.log("==============", req.body[key], "============");
      if (req.body[key].length > 0) {
        console.log("length:", req.body[key].length, "----", req.body[key]);
        //search_query.key = req.body[key];\
        Object.assign(search_query, { cat_ids_arr: req.body[key] });
      }
    }

    if (key == "socialsorting") {
      //console.log(reqBody[key]);
      if (req.body[key].length > 0) {
        //search_query.key = req.body[key];
        Object.assign(search_query, { socialsorting: req.body[key] });
      }
    }
  });
  console.log("================== FINAL Object ================== ");
  console.log(search_query);

  // var aabbcc = {
  //   cat_ids_arr: ["Health", "Auto"],
  //   socialsorting: [
  //     "fb_fan_count",
  //     "ig_followers_count",
  //     "yt_subscriber_count"
  //   ],
  //   state: "State",
  //   reach_min: 0,
  //   reach_max: 9000000
  // };

  // res.json({
  //   success: true,
  //   aa: "aaa"
  // });

  const query = { category_name: "Entertainment" };

  // Creator.find({
  //   category_name: ["Health", "Auto"],
  //   reach: { $gt: 0 },
  //   fb_fan_count: { $gt: 3382, $lt: 18503 }
  // })

  Creator.find({
    category_name: ["Health", "Auto"]
  })
    .sort({ reach: -1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .limit(20)
    .populate("cat_id", ["wall_cat", "wall_cat_code"])
    .exec()
    .then(creators => {
      //console.log(creators);
      console.log("then");
      const response = {
        count: creators.length,
        creator: creators.map(creator => {
          return {
            name: creator.name,
            _id: creator._id,
            reach: creator.reach,
            cat_id: creator.cat_id,
            channel_name: creator.channel_name,
            category_name: creator.category_name,
            fb_fan_count: creator.fb_fan_count,
            ig_followers_count: creator.ig_followers_count,
            yt_subscriber_count: creator.yt_subscriber_count
          };
        })
      };
      res.json(response);
      //res.status(200).json(response);
    })
    .catch(err =>
      res.status(400).json({
        error: err
      })
    );
});

module.exports = router;
