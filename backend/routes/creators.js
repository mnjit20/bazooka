const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Creator = require('../models/Creator');
const Category = require('../models/Category');

router.get('/test', (req, res) => res.json({ msg: 'Test Works' }));

router.get('/all', (req, res)=>{
    Creator.find({reach: {$gt: 0}}).sort({reach:-1}).collation({locale: "en_US", numericOrdering: true}).limit(50)
    .populate('cat_id',['wall_cat','wall_cat_code'])
    .exec()
      .then(creators=> {
         const response = {
            count  : creators.length,
            creator: creators.map(creator=>{
                return {
                    name : creator.name,
                    _id :  creator._id,
                    reach: creator.reach,
                    cat_id:creator.cat_id,
                    channel_name:creator.channel_name,
                    category_name: creator.category_name,
                }
            })
        };       
        res.status(200).json(response);
    })
   
});

module.exports = router;  