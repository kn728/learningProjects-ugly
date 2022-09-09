import React from 'react'



export function Reg(name, userName, email, password) {
    const user = {name, userName, email, password}
    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => console.log(data))
}