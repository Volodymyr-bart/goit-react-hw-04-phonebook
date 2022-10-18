import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useLocalStorage('filter', '');

  const handleAddContact = data => {
    const { name } = data;
    if (
      !contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setContacts(prevState => [...prevState, data]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      {contacts.length !== 0 && (
        <ContactList
          contacts={filteredContacts()}
          deleteContact={handleDeleteContact}
        />
      )}
    </>
  );
};
