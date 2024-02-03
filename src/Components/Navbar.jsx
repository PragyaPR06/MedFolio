import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from'./styles.module.scss';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Medical Automation Services
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <nav >
            <ul className={styles.navbar} >
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
