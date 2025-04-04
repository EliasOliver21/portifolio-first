// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
          <Typography>

            <Toolbar sx={{justifyContent:"space-evenly"}} >

              <Grid><Button href='/home' color="inherit">Home</Button></Grid>
              <Grid><Button href='/projects' color="inherit">Projects</Button></Grid>
              <Grid><Button href='/contacts' color="inherit">Contact</Button></Grid>
                
            </Toolbar>

          </Typography>

      </AppBar>
    </Box>
  );
}
