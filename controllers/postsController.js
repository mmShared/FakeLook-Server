const postsService = require('../services/postsService')
const Post = require('../models/post');

const postsController = () => {

    const getAllPostsByDateTime = async (req,res) => {
        res.json(await(postsService.getAllPostsByDateTime(
            req.params.df,req.params.dt
        )));
    }

    const getAllPosts = async (req, res) => {
        try {
            await postsService.getAllPosts((data) => {
                res.json(data);
            })
        } catch (err) {
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    const getAllPostsByTags = async (req, res) => {
        try{
            res.json(await(postsService.getAllPostsByTags(req.params.tag)));  
        } catch(err){
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    const getPostById = async (req, res) => {
        try {
            await postsService.getPostById(req.params.id, (data) => {
                res.json(data);
            })
        } catch (err) {
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }
    const insertPost = async (req,res) => { 
        try{
            Post.locationX = req.body.LocationX;
            Post.locationY = req.body.LocationY;
            Post.text = req.body.Text;
            Post.photo = req.body.Photo;
            Post.publishDate = req.body.PublishDate;
            Post.postTags = req.body.Tags;
            await postsService.insertPost(Post);
            res.send('succeded');
        }
        catch(err){
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    return {
        getAllPosts,
        getPostById,
        insertPost,
        getAllPostsByDateTime,
        getAllPostsByTags
    };
}

module.exports = postsController;

