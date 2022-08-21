import './App.css';
import { Container, AppBar,  Typography, Grow, Grid} from '@mui/material';
import memories from './images/memories.png'

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar positiion='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xsw={12} sm={7}>
                
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
