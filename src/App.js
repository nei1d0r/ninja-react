import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {id: 1, name: 'Neil', age : 33, belt: 'Black'},
      {id: 2, name: 'Bruce', age : 62, belt: 'White'},
      {id: 3, name: 'Sara', age : 25, belt: 'Red'}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    if (ninja.name !== "" && ninja.age !== "" && ninja.belt !== "") // cheap validation!
      this.setState({
        ninjas : [...this.state.ninjas, ninja]
      })
    else {
      console.log('fields cannot be blank!')
    }
  }

  deleteNinja = (id) => {
    this.setState({
      // set ninjas state by filtering out deleted ninja by id
      ninjas : [...this.state.ninjas].filter(ninja => ninja.id !== id)
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    // documents props and state of component before update, such as deleting an item
    console.log(prevProps, prevState);
    console.log('component did update')
  }

  render() {
    return (
      <div className="App">

        <h1>Some header content</h1>
        <p>Some paragraph content</p>

        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
