import React, { Component } from 'react'
import

export default class Clubs extends Component {

  state = {
    data: [],
    loaded: false
  }

  componentDidMount() {
    fetch(`/api-client/teams/list.json?key=He2aaauPjroKqVba&secret=7jz2KqorkePH30oLerVoCpeVRCFiyQtG`)
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
