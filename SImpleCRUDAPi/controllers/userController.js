import users from '../Models/user.js'



export const getUsers = async (req, res) => {
    
    try {
        const user = await users.find();
        res.json(user)
    }catch(err) {
        res.json({message: err})
    }
}

export const createUser = async (req, res) => {
    const {name, age} = req.body

    const newUser = new users({name,age})
    try {
        const user = await newUser.save()
        res.json(user)
    } catch(err) {
        res.json({message: err})
    }

}

export const getUser= async (req, res) => {
    try {
        const user = await users.findById(req.params.id)
        res.json(user)
    } catch(err) {
        res.json({message: err})
    }

}
export const deleteUser = async (req, res) => {
   
    try{
        const deleted = await users.remove({_id: req.params.id})
        res.json(deleted)
    }catch(err) {
        res.json({message: err})
    }

}

export const updateUser = async (req, res) =>{
    try {
        const updatedUser = await users.updateOne({_id: req.params.id}, 
            {$set: {name: req.body.name, age: req.body.age}})
            res.json(updatedUser)
    }
    catch(err){
        res.json({message: err})
    }
}
