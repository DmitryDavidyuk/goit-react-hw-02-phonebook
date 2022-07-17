import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(5);
  phoneInputId = nanoid(5);

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                id={this.nameInputId}
              />
            </label>
            <label>
              Phone
              <input
                type="text"
                name="number"
                value={number}
                onChange={this.handleChange}
                id={this.phoneInputId}
              />
            </label>

            <button type="submit">Add contact</button>
          </div>
        </form>
      </>
    );
  }
}

export default ContactsForm;
