function route(app) {
    const postRouter = require('./posts.route');
    app.use("/posts", postRouter)
}

module.exports = route;