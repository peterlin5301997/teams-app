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
      return <TeamCard key={team.name} name={team.name} />
    })

    return(
      <div className="teams-container">
        <h1>MLB Teams</h1>
        { teams }
      </div>
    )
  }

}

export default TeamsContainer;
