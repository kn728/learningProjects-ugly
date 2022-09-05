import mongoose from'mongoose'
import userAccounts from '../models/user.js'

export const login = async (req, res)  => {
    try {
        const users = await userAccounts.find()
        res.json(users)
    } catch(err) {
        res.json({message: err})
    }
}

export const RegisterUser = async (req, res) => {
    const {name, userName, email, password} = req.body

    const newUser = new userAccounts({name, userName, email, password})

    try {
        const nUser= await newUser.save()
        res.json(nUser)
    }catch(err){
        res.json({message: "userName already used"})
    }
}