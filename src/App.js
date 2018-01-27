import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Form from './components/Form';
import Button from './components/Button';
import DailyForecast from './components/DailyForecast';
import FiveDayForecast from './components/FiveDayForecast';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      forecast: {},
      fiveDayForecast: [],
      isOpen: false
      // to do
      // add error messaging to state
    }
    this.getForecast = this.getForecast.bind(this);
    this.getFiveDayForecast = this.getFiveDayForecast.bind(this);
  }

  getForecast(location) {
    console.log(location);
    const weatherApi = 'http://api.openweathermap.org/data/2.5/weather?appid=db55c1d42642ef65aff9ac8f322f3b44&units=metric';

    const encodedLocation = encodeURIComponent(location);
    console.log(encodedLocation);

    axios.get(`${weatherApi}&q=${encodedLocation}`)
      .then(resp => {
        if (resp.data) {
          console.log(resp.data);
          this.setState({
            location: location,
            forecast: resp.data,
            fiveDayForecast: [],
            isOpen: true
          });
        }
      })
      .catch(err => {
        console.log('error');
        // set state error message
      });
    }

  getFiveDayForecast(location) {
    const forecastApi = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=db55c1d42642ef65aff9ac8f322f3b44&units=metric';

    const encodedLocation = encodeURIComponent(location);

    axios.get(`${forecastApi}&q=${encodedLocation}`)
      .then(resp => {
        const data = resp.data.list
        const fiveDayForecast = data.slice(1, data.length - 1);

        this.setState({ fiveDayForecast });
        console.log(this.state.fiveDayForecast);
      })
      .catch(err => {
        console.log(err);
      })
    //to do
    // create new component for five day forecast
    // for each item in array render out component
  }

  render() {
    return (
      <div className="App">
        <Header title="React Weathr"/>
        <div className="container">
          <div className="main">
            <Form onFormSubmit={this.getForecast} />
            <DailyForecast
              location={this.state.location}
              forecast={this.state.forecast}
              show={this.state.isOpen}
            />
            <Button
              location={this.state.location}
              show={this.state.isOpen}
              onBtnClick={this.getFiveDayForecast}
              classname="btn btn-default btn--forecast"
              buttonText="Get Five Day Forecast →"
            />
          </div>
          <FiveDayForecast
            forecast={this.state.fiveDayForecast}
          />
        </div>
      </div>
    );
  }
}

export default App;
