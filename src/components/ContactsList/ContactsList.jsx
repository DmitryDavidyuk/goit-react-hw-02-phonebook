import React from 'react';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        <li key={id}>
          <p>{name}</p>
          <p>{phone}</p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>;
      })}
    </ul>
  );
};

export default ContactsList;
