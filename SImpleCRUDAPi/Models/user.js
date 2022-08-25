import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    
})

const users = mongoose.model('user', postSchema)
export default users