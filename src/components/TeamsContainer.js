import React from 'react';

import TeamCard from './TeamCard';

class TeamsContainer extends React.Component {

  state = {
    teams: []
  }

  componentDidMount() {
    fetch('http://statsapi.mlb.com/api/v1/teams?sportId=1')
    .then(res => res.json())
    .then(data => {
      this.setState({ teams: [...data.teams] })
    })
  }

  render() {

    const teams = this.state.teams.map(team => {
      let rosterAPI = `http://statsapi.mlb.com/api/v1/teams/${team.id}/roster?sportId=1&hydrate=person`
      return <TeamCard key={team.id} name={team.name} venue={team.venue.name} roster={rosterAPI} />
    })

    return(
      <div>
        <h1>MLB Teams</h1>
        <div className="teams-container">
          { teams }
        </div>
      </div>
    )
  }

}

export default TeamsContainer;
