import React, { Component } from 'react';
import Stage from './Stage';
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
    fetch(`api-client/scores/history.json?key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&competition_id=244&from=2020-01-01&to=${date}`)
    .then(response => response.json())
    .then(result => {
      data.push(...result.data.match);

      // get fixtures
      return fetch(`api-client/fixtures/matches.json?key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&competition_id=244`);
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
