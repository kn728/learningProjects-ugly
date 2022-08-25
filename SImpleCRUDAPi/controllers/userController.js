import users from '../Models/user.js'



export const getUsers = (req, res) => {
    res.send('we exist')
}

export const createUser = (req, res) => {
    const {name, age} = req.body

    const newUser = new users({name,age})
    newUser.save().then(data => res.json(data)).catch(err => {res.status(404)})

}

export const getUser= (req, res) => {
    const userId = req.params.id
    const user =  users.find(function(user) {
        return user.id === Number(userId)
    })

    res.json(user)
}
export const deleteUser = (req, res) => {
    const userId = req.params.id

    users = users.filter((user) => {
        return user.id !== Number(userId)
    })

    res.json(users)

}

export const updateUser = (req, res) =>{
    const userId=  req.params.id
    const {age, name} = req.body

    users = users.map((user) => {
        if(user.id === Number(userId)) {
            return {
                name,
                age, 
                id: user.id
            }            
        }
        return user        
    })
    res.json(users)    
}
