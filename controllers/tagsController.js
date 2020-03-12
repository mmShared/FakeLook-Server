const tagsService = require('../services/tagsService')


const tagsController = () => {

    const getTagsPostByPostId = async (req, res) => {
        try {
            await tagsService.getTagsPostByPostId(req.params.id, (data) => {
                res.json(data);
            })
        } catch (err) {
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    return {
        getTagsPostByPostId
    };
}

module.exports = tagsController;
