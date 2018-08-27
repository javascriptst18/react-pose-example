import React, { Component } from 'react';
import { PoseGroup } from 'react-pose';

import Button from './Button';
import AnimatedList from './AnimatedList';
import AnimatedListItem from './AnimatedListItem';

import shuffle from '../shuffle';

class List extends Component {
  state = {
    visible: false,
    todos: [
      {
        id: 1,
        text: 'Lon Lon Ranch'
      },
      {
        id: 2,
        text: 'Moo Moo Milk'
      },
      {
        id: 3,
        text: 'The milk is evil'
      }
    ]
  }

  /**
   * Only used to reorder the items for demonstration, Will shuffle the list
   * every 2 seconds
   */
  componentDidMount(){
    this.interval = setInterval(this.shuffleList, 2000);
  }

  // Remove the shuffle interval when we unmount (remove) the component
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible });
  }
  
  // Remove item from list when clicking item
  remove = (id) => {
    const todos = this.state.todos.filter(item => item.id !== id)
    this.setState({ todos });
  }

  shuffleList = () => {
    this.setState({ todos: shuffle(this.state.todos) });
  };

  render() {
    // closed/open are connected to the properties inside of AnimatedList
    let position = 'closed';
    if(this.state.visible){
      position = 'open';
    }

    // Same same
    const listOfTodos = this.state.todos.map(item => {
      return (
        <AnimatedListItem onClick={() => this.remove(item.id)} key={item.id}> 
          {item.text} 
        </AnimatedListItem>
        )
    })

    return (
      <React.Fragment>
        <Button onClick={this.toggleVisible} text="Toggle" />
        { /* pose is a predefined prop that every react-pose component must have */}
        <AnimatedList className="list" pose={position}>
          { /* PoseGroup automatically animate our items, must wrap the items */}
          <PoseGroup>
            {listOfTodos}
          </PoseGroup>
        </AnimatedList>
      </React.Fragment>
    );
  }
}

export default List;