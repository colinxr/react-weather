import React, { Component } from 'react';

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
        <input id="formLocation" type="text" name="location"  placeholder="Just your city, please" required autoFocus ref={(input) => {this.formInput = input}} />
        <button type="submit">Get Weather →</button>
      </form>
    );
  }
}

export default Form;
