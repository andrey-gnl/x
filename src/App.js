import React from 'react';
import './App.scss';
import Header from './components/Header/';
// import GroupList from './components/Group/GroupList';
import PlayOff from './components/PlayOff/';
import Sidebar from './components/Sidebar/';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <div className="page__header">
          <Header />
        </div>
        <div className="page__main">
          <PlayOff />
        </div>
      </div>
      <div className="page__sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
