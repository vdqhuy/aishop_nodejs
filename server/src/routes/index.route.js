const postRouter = require('./posts.route');

function route(app) {
    app.use("/posts", postRouter)
}

module.exports = route;