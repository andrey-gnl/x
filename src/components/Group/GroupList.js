import React, { Component } from 'react';
import Group from './Group';
import './group.css'


const data = [
  {
    groupName: 'A',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'B',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'C',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'D',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'E',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'F',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'G',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  },
  {
    groupName: 'H',
    teams: ['Chelsea', 'Valencia', 'Ajax', 'Lille']
  }
];

export default class GroupList extends Component {

  constructor(props) {
    super(props);

    this.state = { groupData: []}
  }

  componentDidMount() {
    /* TODO: make request to group data
     /v1/competitions/1/seasons/2020/standings
    */

    this.setState({groupData: data});
  }

  render() {
    const list = this.state.groupData.map((item, index) => <Group name={item.groupName} teams={item.teams} key={index} />);

    return (
      <div className="group-l">
        {list}
      </div>
    )
  }
}
