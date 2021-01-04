import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    

  },
  appbar:{
    alignContent:'center',
    justifyItems:'center',
    alignItems:'center',
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function AppBar1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit"   >
            Good Luck
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}