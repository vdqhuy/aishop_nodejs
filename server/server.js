const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('../client/public'));

// HTTP Logger
const morgan = require('morgan')
app.use(morgan('combined'))

//Routers
const postRouter = require('./src/routes/Posts.route')
app.use("/posts", postRouter)

const db = require("./src/models")

db.sequelize.sync().then(() => {
    app.listen(port, () => {console.log(`Server start on port ${port}`)});
});