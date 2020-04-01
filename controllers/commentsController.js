const commentsService = require('../services/commentsService')

const commentsController = () => {

    const getCommentsByPostId = async (req, res) => {
        try {
            await commentsService.getCommentsByPostId(req.params.id, (data) => {
                res.json(data)
            })
        } catch (err) {
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    const insertCommentPost = async (req, res) => {
        try{
            await commentsService.insertCommentPost(
                req.body.Text,
                req.body.PostId,
                req.body.UserId, (data) =>{
                res.json(data);
            })
        } catch(err){
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    return {
        getCommentsByPostId,
        insertCommentPost
    };
}

module.exports = commentsController;
