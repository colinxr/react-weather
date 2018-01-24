import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Form from './components/Form';
import DailyForecast from './components/DailyForecast';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      forecast: {},
      isOpen: false
    }
    this.getForecast = this.getForecast.bind(this);
  }

  getForecast(location) {
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=db55c1d42642ef65aff9ac8f322f3b44&units=metric';

    const encodedLocation = encodeURIComponent(location);

    axios.get(`${BASE_URL}&q=${encodedLocation}`)
      .then(resp => {
        if (resp.data) {
          console.log(resp.data);
          this.setState({
            location: location,
            forecast: resp.data,
            isOpen: true
          });
        }
      })
      .catch(err => {
        console.log('error');
      });
    }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Form onFormSubmit={this.getForecast} />
          <div className="main">
            <DailyForecast
              location={this.state.location}
              forecast={this.state.forecast}
              show={this.state.isOpen}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
