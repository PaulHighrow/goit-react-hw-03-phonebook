import { Component } from 'react';
import { Box } from './Box/Box.styled';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  // Ванільна версія
  // addContact = (name, number) => {
  //     if (this.state.contacts.find(contact => contact.name === name)) {
  //       toast.error(`Sorry, ${name} is already in contacts.`);
  //       return;
  //     }
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, { id: nanoid(), name, number }],
  //     }));
  //     toast.success('Contact successfully added!');
  //   };

  // Formik-версія
  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      toast.error(`Sorry, ${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
    toast.success('Contact successfully added!');
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    toast.success('Contact was deleted!');
  };

  filterContacts = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    let visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Box>
        <Toaster position="bottom-center" />
        <Title title={TITLES.form} />
        <ContactForm onSubmit={this.addContact} />

        <Title title={TITLES.contacts} />
        <Filter filter={filter} onFilterInput={this.filterContacts} />
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </Box>
    );
  }
}
