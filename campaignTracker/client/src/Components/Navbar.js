import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import logo from '../images/logo.png'
export default function Navbar() {
    return (
        <AppBar className = 'test' sx={{backgroundColor: 'black', height:'10vh'}}>
            <Toolbar sx={{justifyContent:'space-between',  height:'100%'}}>
                <img src={logo} />
                <Toolbar>
                    <Button variant='contained' sx={{backgroundColor:'red', fontFamily: 'Oswald, sans-serif', letterSpacing:'2px'}}> Log In</Button>
                </Toolbar>
            </Toolbar>
        </AppBar>
    )
}