import React from 'react';
import {AppBar, Button,Toolbar,Typography}  from '@mui/material/'
import logo from '../images/logo.jpg'

function Navbar() {
    return (
        <AppBar sx={{backgroundColor:'#d1aa60', width:'100%', height:'10vh'}}>
            <Toolbar>
                <Typography  sx= {{
                      flexGrow: 1,
                      padding: 2}}>
                <img src={logo} style={{height:'10vh', width:'400px'}}/>
                </Typography>
                <Button  variant="contained" sx={{width:'200px', height:'60%', backgroundColor:'black'}}> Summon fruits</Button>
            </Toolbar>
            
        </AppBar>
      );
}

export default Navbar;