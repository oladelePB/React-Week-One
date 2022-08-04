import React, { Component } from "react";

class ComponentDidUpdate extends Component {
  constructor() {
    super();
    console.log("The constructor is called");
    this.state = {
      counter: 0,
      name: '',
      price: 0
    };
  }

  // Updates on state change
  componentDidUpdate(previousProps, previousState, snapShot) {
    console.log('Previous State = ' + JSON.stringify(previousState))
  }

  render() {
    return (
      <div>
        <h1>Component Did UpdateSample</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update Count {this.state.counter}
        </button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
