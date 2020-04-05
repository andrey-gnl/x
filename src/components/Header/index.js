import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    '&' : {
      'background-color': '#fff'
    }
  },
  links: {
    '& > *': {
      color: '#000'
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.header}>
      <Toolbar>
        <Typography className={classes.links}>
          <Link href="/countries">Countries</Link>
          <Link href="/federations">Federations</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
