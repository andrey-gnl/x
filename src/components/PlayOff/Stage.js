import React, { Component } from 'react';

import Match from '../Match/';


class Stage extends Component {

  state = {
    teams: this.props.teams,
    stage: this.props.stage,
    activeMatch: null
  }

  makeActiveMatch(home_id, away_id) {

    this.state.teams.some(match => {
     if(home_id === match.away_id && away_id === match.home_id) {
      this.setState({activeMatch: match.id})
      return true;
     }
     return false;
    });

  }

  resetActive() {
    this.setState({activeMatch: null})
  }

  render() {
    const {stage, teams, activeMatch} = this.state;

    let fixtures = teams.map(match => (
        <div className="stage__item" key={match.id}>
          <Match
            id={match.id}
            date={match.date}
            time={match.scheduled || match.time.slice(0,5)}
            home_team={{name: match.home_name, id: match.home_id }}
            away_team={{name: match.away_name, id: match.away_id }}
            score={match.score ? match.score : ' - '}
            isActive={activeMatch === match.id}
            onMouseEnterHandler={this.makeActiveMatch.bind(this)}
            onMouseLeaveHandler={this.resetActive.bind(this)}
            />
        </div>
      ));

  return (
    <div className="stage">
      <div className="stage__header">{stage}</div>
      <div className="stage__items">
        {fixtures}
      </div>
    </div>
  );
  }
}

export default Stage;