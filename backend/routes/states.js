const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const State = require('../models/State');

router.post('/all',(req, res)=>{
    State.find()
    .exec()
    .then(results=>{
        const response = {
            count:results.length,
            category:results.map(result=>{
                return {
                    _id:result._id,
                    name:result.name,
                    status:result.status
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err=>res.status(404).json({
        error:err
    }));
});

module.exports = router;  