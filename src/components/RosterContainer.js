import React from 'react';

import Player from './Player';

class RosterContainer extends React.Component {

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

    const players = this.state.roster.map(player => {
      return <Player key={player.person.id} name={player.person.fullName} />
    })

    console.log(this.props.roster)

    return(
      <div>
        <h1>RosterContainer</h1>
        { players }
      </div>
    )
  }

}

export default RosterContainer;
