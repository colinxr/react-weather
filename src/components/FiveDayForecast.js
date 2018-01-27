import React, { Component } from 'react';
import Day from './Day';

class FiveDayForecast extends Component {

  render() {
    if (!this.props.forecast.length){
      return null;
    }

    return(
      <div className="forecast__five-day">
        <div className="five-days">
          {
            Object
            .keys(this.props.forecast)
            .map(key => <Day key={key} index={key}
              details={this.props.forecast[key]}/>)
          }
      </div>
      </div>
    )
  }
}

export default FiveDayForecast;
