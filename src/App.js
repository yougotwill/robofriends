/**
 * TODO
 * Fix alignment of cards check RoboFriends source
 */

import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

// change to class for now to use state - later check out react hooks to use state with functional components
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

// use the syntax below when creating custom methods ... Andre will give a resource with more explanation
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
