import React, { Component } from 'react';
import { API_KEY, API_SECRET_KEY } from '../constants';

export default class Clubs extends Component {

  state = {
    data: [],
    loaded: false
  }

  componentDidMount() {
    fetch(`/api-client/teams/list.json?key=${API_KEY}&secret=${API_SECRET_KEY}`)
    .then(res => res)
    .then(({teams}) => {
      this.setState({data: teams, loaded: true});
    });
  }

  buildTable() {
    console.log('hi');
  }

  render() {
    const content = this.state.loaded ? this.buildTable() : 'Loading...';
    return (
      <div>
        {content}
      </div>
    )
  }

}
