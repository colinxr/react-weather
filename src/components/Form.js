import React, { Component } from 'react';
import Button from './Button';

class Form extends Component {

  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const location = this.formInput.value;
    if (!location) return
    this.props.onFormSubmit(location);
  }

  render() {
    return (
      <form id="form" onSubmit={(e) => this.submitForm(e)}>
        <label for="location">Enter your location</label>
        <input id="formLocation" type="text" name="location"  placeholder="Just your city, please" required autoComplete="off" autoFocus ref={(input) => {this.formInput = input}} />
        <Button classname="btn btn-default" buttonText="Get Weather →"/>
      </form>
    );
  }
}

export default Form;
