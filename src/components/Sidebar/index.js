import React, { Component } from 'react';
import './Sidebar.sass'
import Table from './Table'
import {API_KEY, API_SECRET_KEY} from '../constants'

class Sidebar extends Component {

  state = {
    league: localStorage.getItem('countryId') || 2,
    table: null,
    loading: true
  }

  componentDidMount() {
    fetch(`api-client/leagues/table.json?key=${API_KEY}&secret=${API_SECRET_KEY}&competition_id=${this.state.league}`)
    .then(response => response.json())
    .then(result => {
      this.setState({table: result.data.table, loading: false});
    });
  }

  countryUpdate(e) {
    const value = e.currentTarget.value;

    this.setState({loading: true});

    fetch(`api-client/leagues/table.json?key=${API_KEY}&secret=${API_SECRET_KEY}&competition_id=${value}`)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('countryId', value);
      this.setState({table: result.data.table, loading: false, league: value});
    });

  }

  render() {

    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__select">
            <select onChange={(e) => this.countryUpdate(e)} defaultValue={this.state.league}>
              <option value="2">England</option>
              <option value="4">Italy</option>
              <option value="3">Spain</option>
              <option value="1">Germany</option>
              <option value="5">France</option>
            </select>
          </div>
        </div>
        <div className="sidebar__table">
          {
            this.state.loading
            ? <div className="loader sidebar__loader" />
            : <Table standing={this.state.table} />
          }
        </div>
      </div>
    );
  }
}

export default Sidebar;