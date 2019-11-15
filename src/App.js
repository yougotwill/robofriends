/**
 * TODO
 * Fix alignment of cards check RoboFriends source
 */

import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

// change to class for now to use state - later check out react hooks to use state with functional components
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: ''
    };
  }

// use the syntax below when creating custom methods ... Andre will give a resource with more explanation
  onSearchChange = (event) => {
    this.setState({ 'searchField': event.target.value });
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
