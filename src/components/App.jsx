import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import ContactsForm from './ContactsForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    id: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  render() {
    return (
      <div>
        <ContactsForm onSubmit={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
