import React, { Component } from 'react';
// 1. "connect" is a function from the react-redux library and imported in to this app. 
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
//   debugger;
  return { items: state.items }
}

// 2. By passing in mapStateToProps as an argument to "connect", App receives the return value as a prop. App.props.items will show the values of state.items.
// 3. Any function passed in to the connect function will be called every time state changes.
export default connect(mapStateToProps)(App);
