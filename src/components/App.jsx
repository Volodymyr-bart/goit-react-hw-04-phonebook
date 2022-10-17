import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const contacts = localStorage.getItem('contacts');
      const parseContacts = JSON.parse(contacts);
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = data => {
    const { name, number, id } = data;
    const { contacts } = this.state;
    if (
      !contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id, name, number }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts() {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        {this.state.contacts.length !== 0 && (
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.handleDeleteContact}
          />
        )}
      </>
    );
  }
}
