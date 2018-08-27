import React, { Component } from 'react';
import List from './List';
import Box from './Box';
import Button from './Button';
import '../App.css';

class App extends Component {

  state = {
    toggle: false,
  }

  toggleVisible = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    let position = 'hidden';
    if(this.state.toggle){
      position = 'visible'
    }
    return (
      <React.Fragment>
        <List />
        <Button onClick={this.toggleVisible} text="Toggle" />
        <Box className="box" pose={position} />
      </React.Fragment>
    );
  }
}

export default App;
