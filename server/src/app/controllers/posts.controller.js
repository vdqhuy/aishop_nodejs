const { Posts } = require('../../models');

class PostsController {
    async getListOfPosts(req, res) {
        const listOfPosts = await Posts.findAll();
        res.json(listOfPosts);
    }

    async submitPost(req, res) {
        const post = req.body;
        await Posts.create(post);
        res.json(post);
    }

    getSlug(req, res) {
        res.send("Hello Slug!!");
    }
}

module.exports = new PostsController;