const postsRoutes = {
    'GET /posts': "postsController.getAllPosts",
    'GET /posts/:id': "postsController.getPostById",
    'GET /posts/:id/likes': "likesController.getLikesPostByPostId",
    'GET /posts/:id/comments': "commentsController.getCommentsByPostId",
    'GET /posts/:id/tags': "tagsController.getTagsPostByPostId",
    'GET /posts/:id/mentions': "mentionsController.getTagsUsersPostByPostId",
    'GET /posts/:df/:dt': "postsController.getAllPostsByDateTime",
    'GET /post/:tag/': "postsController.getAllPostsByTags",
    'POST /posts': 'postsController.insertPost',
    'POST /posts/likes': 'likesController.insertLikePost',
    'POST /posts/comments': 'commentsController.insertCommentPost'
};

module.exports = postsRoutes;