

let users = [
    {
        name: 'john',
        age: 30 ,
        id: 1
    },
    {
        name: 'mark',
        age: 69,
        id: 2  
    },
    {
        name: 'sam',
        age: 43,
        id: 3 
    }
]

export const getUsers = (req, res) => {
    res.json(users)
}

export const createUser = (req, res) => {
    const { name, age} = req.body
   users.push({
        name: name,
        age:age
   })
   res.json(users)
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
