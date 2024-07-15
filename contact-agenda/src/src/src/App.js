import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import AddContact from './AddContact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const addContact = (contact) => {
    axios.post('http://localhost:5000/contacts', contact)
      .then(response => setContacts([...contacts, response.data]))
      .catch(error => console.error('Error adding contact:', error));
  };

  return (
    <div>
      <h1>Contact Agenda</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
