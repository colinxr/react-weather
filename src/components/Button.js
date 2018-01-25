import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const location = this.props.location;
    console.log('test');
    this.props.onBtnClick(location);
  }

  render() {
    if (this.props.onBtnClick) {
      if(!this.props.show){
        return null;
      }

      return <button className={this.props.classname} onClick={(e) => this.handleClick(e)} type="submit">{this.props.buttonText}</button>
    }

    return <button className={this.props.classname} type="submit">{this.props.buttonText}</button>
  }
}

export default Button;
