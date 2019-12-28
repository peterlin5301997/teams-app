import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div className="card-container">
        <div><b>{ this.props.name }</b></div>
        <div>Age: { this.props.age }</div>
        <div>Height: { this.props.height } ft</div>
        <div>Weight: { this.props.weight } lbs</div>
        <div>Primary Position: { this.props.position }</div>
      </div>
    )
  }
}

export default Player;
