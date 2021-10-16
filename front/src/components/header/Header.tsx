import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student App
          </Typography>
          <Button component={Link} to= "/" color="inherit">
            Listar
          </Button>
          <Button component={Link} to= "/add-student" color="inherit">
            Adicionar
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;