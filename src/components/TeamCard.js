import React from 'react';

class TeamCard extends React.Component {
  render() {
    return(
      <div>
        <div>{ this.props.name }</div>
        <div>{ this.props.venue }</div>
        <br/>
      </div>
    )
  }
}

export default TeamCard;
