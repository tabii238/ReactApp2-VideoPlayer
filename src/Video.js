import React from 'react';
//this.state.src is passed to Video from App so that Video can display the selected video:
export class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}