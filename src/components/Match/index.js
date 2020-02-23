import React, { Component } from 'react';
import './match.css';

class Match extends Component {

  static defaultProps = {
    onMouseEnterHandler: function() {},
    onMouseLeaveHandler: function() {},
    isActive: false
  }

  render() {
    const {
      home_team,
      away_team,
      score,
      date,
      time,
      onMouseEnterHandler,
      onMouseLeaveHandler,
      isActive} = this.props;

    return (
      <div className={`match ${isActive ? 'is-active' : ''}`}
       onMouseEnter={() => onMouseEnterHandler(home_team.id, away_team.id)}
       onMouseLeave={() => onMouseLeaveHandler()}
       >
        <div className="match__teams">
          <div className="match__team">
            <div className="match__team-logo"><img src={`./images/${home_team.id}.png`} alt={home_team.name} /></div>
            <div className="match__team-name">{home_team.name}</div>
          </div>
          <div className="match__score">{score}</div>
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
