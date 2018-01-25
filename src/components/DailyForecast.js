import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

class DailyForecast extends Component {

  render() {
    if(!this.props.show){
      return null;
    }

    return(
      <div className="forecast">
        <WeatherCard
          location={this.props.location}
          forecast={this.props.forecast}
        />
      </div>
    );
  }
}

export default DailyForecast;
