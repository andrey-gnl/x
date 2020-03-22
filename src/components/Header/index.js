import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  links: {
    '& > *': {
      color: '#000'
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  }
}))

const Header = (props) => {
  const theme = props.theme;
  const classes = useStyles();

  return (
    <AppBar position="sticky" color={theme.palette.common.white}>
      <Toolbar>
        <Typography className={classes.links}>
          <Link href="/">Countries</Link>
          <Link href="/federations">Federations</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
