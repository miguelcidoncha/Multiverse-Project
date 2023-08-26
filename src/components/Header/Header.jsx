import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  links: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Typography variant="h6" component="div" className={classes.logo}>
          Logo
        </Typography>
        <div className={classes.links}>
          <Button color="inherit" className={classes.link}>
            Inicio
          </Button>
          <Button color="inherit" className={classes.link}>
            Registro
          </Button>
          <Button color="inherit" className={classes.link}>
            <PersonIcon />
            Usuario
          </Button>
          <Button color="inherit" className={classes.link}>
            <ShoppingCartIcon />
            Carrito
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;