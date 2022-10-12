import React from 'react';

export class Menu extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this); //binding to Menu since it is called from <form>
    }

  //handleClick is an event handler function that will call chooseVideo with an object ("text") that extracts the value of one of the inputs
  handleClick(e) {
      var text = e.target.value;
      this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}