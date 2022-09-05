import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    userName: {
        type: String,
        unique: true
    },
    email: String,
    password: String
})

const userAccounts = mongoose.model('userAccounts', userSchema)
export default userAccounts;