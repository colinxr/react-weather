import React, { Component } from 'react';

class WeatherCard extends Component {

  render() {

    const {location, forecast} = this.props;

    const temp = Math.round(forecast.main);
    const wind = forecast.wind.speed;
    const desc = forecast.weather[0].description;

    const humidity = forecast.main.humidity;
    const icon = forecast.weather[0].icon;
    const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

    const d = new Date();
    const date = d.toDateString();

    return (
      <div className="forecast__today card" >
        <div className="header">
          <h2 className="title">{location} {Math.round(forecast.main.temp)} C</h2>
        </div>

        <div className="info">
          <div className="info__icon">
            <p className="date">{date}</p>
            <p className="description">{forecast.weather[0].description}</p>

            <img className="info__icon icon" src={iconUrl} />
          </div>

          <div className="info__weather">
            <p className="wind">{forecast.wind.speed}</p>
            <p className="humidex">{forecast.main.humidity}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default WeatherCard;
