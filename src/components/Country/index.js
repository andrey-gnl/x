import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Country extends Component {
  render() {
    let { countryId } = this.props.match.params;

    return (
        <h2>{countryId}</h2>
    );
  }
}

export default withRouter(Country);