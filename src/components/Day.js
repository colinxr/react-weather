import React, { Component } from 'react';

class Day extends Component {

  constructor() {
    super();
    this.formateDate = this.formatDate.bind(this);
  }

  formatDate(dt) {
    const t =  new Date(dt * 1000);

    const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const d = week[t.getDay()];
    const dd = t.getDate();
    const mm = month[t.getUTCMonth()];

    const date = `${d}, ${mm} ${dd}`;

    return date;
  }

  render() {
    const { details } = this.props;

    const roundTemp = Math.round(details.temp.max);
    const icon = details.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
    const desc = details.weather[0].description;

    return(
      <div className="card card--day">
        <p className="card--day__date">{this.formatDate(details.dt)}</p>
        <img src={iconUrl} alt={desc} className="card--day__icon info__icon__one icon"/>
        <h2 className="card--day__temp">{roundTemp} C</h2>
        <p className="card--day__dec">{desc}</p>
      </div>
    )
  }
}

export default Day;
