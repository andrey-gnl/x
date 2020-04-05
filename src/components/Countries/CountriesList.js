import React, { Component } from 'react'
import { Link } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {API_KEY, API_SECRET_KEY} from '../constants';

const styles = {
  link: {
    'margin': '10px 0'
  }
};


class CountriesList extends Component {
  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    fetch(`/api-client/countries/list.json?key=${API_KEY}&secret=${API_SECRET_KEY}`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({data: data.country, loading: false});
    });
  }

   render() {
    const {classes} = this.props;
    const {loading, data} = this.state;
    let content = 'Loading...';
    const { url } = this.props.match;

    if(!loading) {
      content = data.reduce((acc, country) => {

        if (country.is_real === '1') {
          let item = (
            <div
              key={country.id}
              className={classes.link}
            >
              <Link href={`${url}/${country.id}`}>{country.name}</Link>
            </div>);

          return [...acc, item]
        }
        return acc;

      }, [])
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(CountriesList));