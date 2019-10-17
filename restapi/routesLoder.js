const Posts = require('./models/Post');

module.exports = function (app) {
    // //Routes
    app.get('/', async (req, res) => {
        console.log("calling get");

        try {
            const posts = await Posts.find();
            console.log(posts)
            res.json(posts)
        } catch (err) {
            res.json({
                message: err
            });
        }
    });


    //posting the data 
    app.post('/', async (req, res) => {
        console.log("req.body: ", req.body);
        const posts = new Posts({
            title: req.body.title,
            description: req.body.description
        });
        try {
            const savedPost = await posts.save()
            console.log("savedPost: ", savedPost);

            res.json(savedPost)
        } catch (err) {
            res.json({
                message: err
            })
        }
    });
    //get the data by id
    app.get('/:postId', async (req, res) => {


        try {
            const posts = await Posts.findById(req.params.postId);
            res.json(posts);

        } catch (err) {
            res.json({
                message: err
            })
        }
    });
    //delete post
    app.delete('/:postId', async (req, res) => {
        try {
            const removedPost = await Posts.remove({
                _id: req.params.postId
            })
            res.json(removedPost)
        } catch (err) {
            res.json({
                message: err
            })
        }
    });
    //update the id
    app.patch('/:postId', async (req, res) => {
        try {
            const update = await Posts.updateOne({
                _id: req.params.postId
            }, {
                $set: {title:req.body.title}
            })
            res.json(update)
        } catch (err) {
            res.json({
                message: err
            })
        }
    })
}