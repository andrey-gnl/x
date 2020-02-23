import React, { Component } from 'react';
import Stage from './Stage';
import { API_KEY, API_SECRET_KEY, UCL_ID } from '../constants'

import './playoff.css';

export default class PlayOff extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], loaded: false};
  }

  componentDidMount() {
    const date = new Date().toJSON().slice(0,10);
    let data = [];

    // get past results
    fetch(`api-client/scores/history.json?key=${API_KEY}&secret=${API_SECRET_KEY}&competition_id=${UCL_ID}&from=2020-01-01&to=${date}`)
    .then(response => response.json())
    .then(result => {
      data.push(...result.data.match);

      // get upcoming matches
      return fetch(`api-client/fixtures/matches.json?key=${API_KEY}&secret=${API_SECRET_KEY}&competition_id=${UCL_ID}`);
    })
    .then(response => response.json())
    .then(result => {
      data.push(...result.data.fixtures);
      this.setState({data: data, loaded: true});
    });

  }

  render() {
    const {data, loaded} = this.state;
    let content = <div className="loader stage-loader"/>;

    if(loaded) content = <Stage stage="Stage of 16" teams={data} />

    return (
      <div>
        {content}
      </div>
    )
  }

}
