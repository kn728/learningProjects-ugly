import React from 'react';
import {AppBar} from '@mui/material/'
import logo from '../images/logo.jpg'

function Navbar() {
    return (
        <AppBar sx={{backgroundColor:'#d1aa60', width:'100%', height:'10vh', display:'flex', alignContent:'center'}}>
            <img src={logo} style={{height:'80%', width:'400px', padding:'10px'}}/>
        </AppBar>
      );
}

export default Navbar;