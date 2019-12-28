import React from 'react';

import Player from './Player';

class TeamCard extends React.Component {

  state = {
    roster: []
  }

  componentDidMount() {
    fetch(this.props.roster)
    .then(res => res.json())
    .then(data => {
      this.setState({ roster: [...data.roster] })
    })
  }

  render() {

    let players = this.state.roster.map(player => {
      return <Player name={player.person.fullName} />
    })

    return(
      <div>
        <div>{ this.props.name }</div>
        <div>{ this.props.venue }</div>
        <button>roster link</button><br/><br/>
      </div>
    )
  }
}

export default TeamCard;
