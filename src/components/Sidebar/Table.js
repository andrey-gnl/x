import React from 'react';

const Table = (props) => {
  const {standing} = props;

  const tableContent = standing.map((team, index) => (
    <div className="table__row" key={team.team_id}>
      <div className="table__name">{index+1}. {team.name}</div>
      <div className="table__points">{team.matches}</div>
      {/* <div className="table__points">{team.won}</div>
      <div className="table__points">{team.drawn}</div>
      <div className="table__points">{team.lost}</div> */}
      <div className="table__points">{team.points}</div>
    </div>
  ))

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__name">Club</div>
        <div className="table__points">GP</div>
        {/* <div className="table__points">W</div>
        <div className="table__points">D</div>
        <div className="table__points">L</div> */}
        <div className="table__points">P</div>
      </div>
      <div className="table__body">
        {tableContent}
      </div>
    </div>
  );
};

export default Table;