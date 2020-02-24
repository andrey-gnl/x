import React, { Component } from 'react'
import './header.sass'

export default class Header extends Component {
  render() {

    return (
      <header className="header">
        <div className="header__list">
          <span href="#" className="header__link">Stats</span>
          <span href="#" className="header__link">Group</span>
          <span href="#" className="header__link is-active">Play-off</span>
          <span href="#" className="header__link">Results</span>
        </div>
      </header>
    )

  }
}
