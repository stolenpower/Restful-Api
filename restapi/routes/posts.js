const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

console.log('calling');


router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find();
    } catch (err) {
        res.json({
            message: err
        });
    }
    next();
});
// router.get('/specific',(req,res)=>{
//     res.send("Showing  specific posts");
// });

router.post('/', async (req, res, next) => {
    
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({
            message: err
        })
    }
    next();
});

module.exports = router;