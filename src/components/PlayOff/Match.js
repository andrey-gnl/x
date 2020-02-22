import React from 'react';

const Match = (props) => {
  const {home_team, away_team, score, date, time, onHover, resetActive, isActive} = props;
  return (
    <div className={`match ${isActive ? 'is-active' : ''}`}
     onMouseEnter={() => onHover(home_team.id, away_team.id)}
     onMouseLeave={() => resetActive()}
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
};

export default Match;
// class Match extends Component {

//   // getEvents(e) {

//   //   e.currentTarget.classList.add('is-loading');

//   //   fetch(`api-client/scores/events.json?key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&id=${this.props.id}`)
//   //     .then(r => r.json())
//   //     .then(r => console.dir(r))

//   // }

//   render() {

//   }
// }

// export default Match;