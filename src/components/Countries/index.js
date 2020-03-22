import React, { Component } from 'react';

class Leagues extends Component {
  state = {
    countries: [],
    loaded: false
  }

  componentDidMount() {
    fetch('/api-client/countries/list.json?key=He2aaauPjroKqVba&secret=7jz2KqorkePH30oLerVoCpeVRCFiyQtG')
    .then(response => response.json())
    .then(result => {
      this.setState({countries: result.country, loaded: true});
    });
  }

  render() {
    // const list = this.state.countries.map();
    return (
      <div>
        {/* {this.state.leagues} */}
      </div>
    );
  }
}

export default Leagues;