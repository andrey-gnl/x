import React, { Component } from 'react';
import { Link, Grid, Paper } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    'margin': '30px 0 0'
  },
  paper: {
    padding: '10px 10px 20px',
    textAlign: 'center'
  },
  flag: {
    marginBottom: '10px',
    '& img': {
      width: '100px',
      height: '100px',
      objectFit: 'contain',
      objectPosition: 'center'
    }
  }
};

class CountriesList extends Component {

  state = {
    data: [],
    loading: true,
    top5: ['19', '1', '47', '43', '21'],
    countries: [
      {
        id: 19,
        name: 'England',
        league: 25,
        cup: 248
      }, {
        id: 1,
        name: 'Germany',
        league: 114,
        cup: 69
      }, {
        id: 21,
        name: 'France',
        league: 46,
        cup: 340
      }, {
        id: 43,
        name: 'Spain',
        league: 74,
        cup: 203
      }, {
        id: 47,
        name: 'Italy',
        league: 73,
        cup: 317
      }
    ]
  }

  render() {
    const {countries} = this.state;
    const {classes, match} = this.props;
    const { url } = match;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {countries.map((c) => {
            return (
              <Grid item xs={3} key={c.id}>
                <Link href={`${url}/${c.id}`}>
                  <Paper className={classes.paper}>
                    <div className={classes.flag}>
                      <img src={`./images/flags/${c.id}.png`} alt={c.name} />
                    </div>
                    {c.name}
                  </Paper>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(CountriesList));