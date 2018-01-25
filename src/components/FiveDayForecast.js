import React, { Component } from 'react';

class FiveDayForecast extends Component {

  render() {
    if (!this.props.forecast.length){
      return null;
    }

    return(
      <div className="forecase__five-day">
        <div className="five-days">
          <h2>Here's a forecast</h2>
      </div>
      </div>
    )
  }
}

export default FiveDayForecast;
