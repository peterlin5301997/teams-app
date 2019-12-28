import React, { useState } from 'react';
import './App.css';

import TeamsContainer from './components/TeamsContainer';
import RosterContainer from './components/RosterContainer';

function App() {

  const [view, setView] = useState('teams');
  const [roster, setRoster] = useState('');

  const renderRoster = (rosterAPI) => {
    // console.log(players)
    setView('roster');
    setRoster(rosterAPI);
  }

  return (
    <div className="App">
      { view === 'teams' ? <TeamsContainer renderRoster={renderRoster} /> : <RosterContainer roster={roster} /> }
    </div>
  );
}

export default App;
