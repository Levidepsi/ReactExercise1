import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'  ;
import postRouter from './router/posts.js'

const app = express()

app.use(bodyParser.json({
    limit: '30mb',
    extended: true
}))

app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}))

app.use(cors())

app.use('/posts', postRouter)

const PORT = process.env.PORT || 2000;

const DBConnection ='mongodb+srv://levi123:FOvuDDRn50iVbAKb@levi.4hu76.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DBConnection, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })

    .catch((error) => {
        console.log(error.message)
    })