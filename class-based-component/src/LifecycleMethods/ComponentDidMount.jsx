import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor() {
    super();
    console.log("The constructor is called");
    this.state = {
      weather: {},
    };
  }

  // Loads when the page is loaded.
  componentDidMount() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=fb8ccf6479bfb6396d3471c968b19e68`;

    fetch(apiUrl)
      .then((response) => {
        const jsonData = response.json();
        jsonData.then((json) => {
            console.log(json)
          this.setState({ weather: json });
        });
      })
      .catch((error) => {
        console.log(`An error occured: ${error}`);
      });
  }

  render() {
    console.log("Render is called");
    return (
      <div>
        <h1>Component Did MountSample</h1>
        <p>Location: {this.state.weather.name}</p>
        <p>Max Temperature: {this.state.weather.main?.temp_max}</p>
        <p>Min Temperature: {this.state.weather.main?.temp_min}</p>
      </div>
    );
  }
}

export default ComponentDidMount;
