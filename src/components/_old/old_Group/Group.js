import React from 'react';

const Group = (props) => {
  const {teams, name} = props;
  const teamList = teams.map((t, index) => <li className="group__item" key={index}><span>{index + 1}.</span>{t}</li>);

  return (
    <div className="group">
      <div className="group__name">Group {name}</div>
      <ol className="group__list">
        {teamList}
      </ol>
    </div>
  );
};

export default Group;