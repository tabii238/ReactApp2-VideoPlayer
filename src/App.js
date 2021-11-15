import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

// App passes down this.state.src to Video. Video uses this info to display the chosen video. 
// App also passes down this.state.src to Menu and menu uses this ability to let a user select a new video. 
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);

    this.state = { src: VIDEOS.fast };
  }
   chooseVideo(newVideo) {
      this.setState({
        src: VIDEOS[newVideo]
      });
   }
//passing src as a prop to video and the chooseVideo function as a prop to menu
  render() {
    return (
      <div>
        <h1>Video Player</h1> 
        <Menu chooseVideo={this.chooseVideo} />
        <Video  src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App /> , 
  document.getElementById('app')
);