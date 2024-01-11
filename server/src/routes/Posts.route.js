const express = require('express');
const router = express.Router();
const postController = require('../app/controllers/posts.controller');

router.get('/detail', postController.getSlug);

router.get('/', postController.getListOfPosts);

router.post('/', postController.submitPost);



module.exports = router;