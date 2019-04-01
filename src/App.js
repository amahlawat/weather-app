import React, { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';
import WeatherDataByCityId from './services/WeatherDataByCityIdService';

class App extends Component {
  componentDidMount(){
    this.fetchServiceData();
  }

  fetchServiceData = async () => {
    let responseData = await WeatherDataByCityId();
    console.log(responseData);
  }

  render() {
    return (
      <div className="App">
        Console
      </div>
    );
  }
}

export default App;
