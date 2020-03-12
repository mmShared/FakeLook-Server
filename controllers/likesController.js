const likesService = require('../services/likesService')

const likesController = () => {

    const getLikesPostByPostId = async (req, res) => {
        try {
            await likesService.getLikesPostByPostId(req.params.id, (data) => {
                res.json(data);
            });
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send(err.message)
        }
    }
    const insertLikePost = async (req ,res) => {
        console.log(req.body.PostId);
        try{
            await likesService.insertLikePost(req.body.PostId , (data) => {
                res.json(data);
            });
        }
        catch (err){
            res.status(500);
            res.send(err.message);
        }
    }

    return {
        getLikesPostByPostId,
        insertLikePost
    };
}

module.exports = likesController;
