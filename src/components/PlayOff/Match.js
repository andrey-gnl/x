import React, { Component } from 'react';

class Match extends Component {

  // getEvents(e) {

  //   e.currentTarget.classList.add('is-loading');

  //   fetch(`api-client/scores/events.json?key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&id=${this.props.id}`)
  //     .then(r => r.json())
  //     .then(r => console.dir(r))

  // }

  render() {
    const {home_team, away_team, score, date, time} = this.props;

    return (
      <div className="match" onMouseEnter="">
        <div className="match__teams">
          <div className="match__team">
            <div className="match__team-logo"><img src={`./images/${home_team.id}.png`} alt={home_team.name} /></div>
            <div className="match__team-name">{home_team.name}</div>
          </div>
          <div className="match__score" onMouseEnter={(e) => this.getEvents(e)}>{score}</div>
          <div className="match__team">
            <div className="match__team-name">{away_team.name}</div>
            <div className="match__team-logo"><img src={`./images/${away_team.id}.png`} alt={away_team.name} /></div>
          </div>
        </div>
        <div className="match__date">{date} {time}</div>
      </div>
    );
  }
}

export default Match;