import React from 'react';
import Match from './Match';

const Stage = (props) => {
  const {stage, teams} = props;
  const rows = [];

  // let lastDate = null;
  teams.forEach(match => {
    rows.push(
      <div className="stage__item" key={match.id}>
        <Match
          id={match.id}
          date={match.date}
          time={match.scheduled || match.time.slice(0,5)}
          home_team={{name: match.home_name, id: match.home_id }}
          away_team={{name: match.away_name, id: match.away_id }}
          score={match.score ? match.score : ' - '}/>
      </div>
    )
  });

  return (
    <div className="stage">
      <div className="stage__header">Stage: {stage}</div>
      <div className="stage__items">
        {rows}
      </div>
    </div>
  );
};

export default Stage;