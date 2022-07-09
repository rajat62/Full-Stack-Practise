import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
      header: {
            background: "#111111"
      },
      tabs:{
            color: "white",
            textDecoration: "none",
            marginRight:20,
            fontSize:15
      },
      main: {
            height:"40"
      }
})

const Navbar = () => {
  
      const classes = useStyle();
      return (
    <div className='main'>
          <AppBar position='static' className={classes.header}>
                  <Toolbar>
                     <Link to="/" className={classes.tabs}>Logo</Link>
                     <Link to="/allusers" className={classes.tabs}>All Users</Link>
                     <Link to="/addusers" className={classes.tabs}>Add Users</Link>
                  </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navbar;