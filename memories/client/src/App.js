import { Container, AppBar,  Typography, Grow, Grid, Toolbar} from '@mui/material';
import memories from './images/memories.png'
import Posts from './Components/Posts/Posts.js';
import Form from './Components/Form/Form';
import { useDispatch } from 'react-redux'
import React from 'react';
import {getPosts} from './actions/posts.js'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  },[])

  return (
    <Container maxWidth='lg'>
      <AppBar className = 'test' position='static' color='inherit' height='30'>
        <Toolbar sx={{justifyContent:'center'}}>
        <Typography variant='h2' className='heading' >Memories</Typography>
        <img src={memories} className='image' height='60' width='60'/>
        </Toolbar>
      </AppBar>
      <Grow in>
        
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
          </Grid>
       
      </Grow>
    </Container>
  );
}

export default App;
