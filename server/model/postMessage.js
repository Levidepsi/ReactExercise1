import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    selectedFile: String,
    tags:[String],
    createdAt: {
        type: Date,
        default: new Date()
    },

    likes: {
        type: Number,
        default: 0
    }
})

const postMessage = new mongoose.model('postMessage', postSchema)

export default postMessage;