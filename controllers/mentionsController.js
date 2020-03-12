const mentionsService = require('../services/mentionsService')


const mentionsController = () => {

    const getTagsUsersPostByPostId = (req, res) => {
        try {
            mentionsService.getTagsUsersPostByPostId(req.params.id, (data) => {
                res.json(data)
            })
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send(err.message)
        }
    }

    return {
        getTagsUsersPostByPostId
    };
}

module.exports = mentionsController;