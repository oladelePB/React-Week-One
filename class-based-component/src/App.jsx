import React, { Component } from "react";
import Cards from "./Cards/Cards";
import ComponentDidUpdate from "./LifecycleMethods/ComponentDidUpdate";
import ComponentDidMount from "./LifecycleMethods/ComponentDidMount";

class App extends Component {
  render() {
    return (
      // <ComponentDidUpdate />
      // <ComponentDidMount />
      <Cards />
    );
  }
}

export default App;
