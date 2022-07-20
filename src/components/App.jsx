import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsReviewForm } from './form/FormContacts';
import ContactList from './list/ContactsList';
import { Filter } from './filter/Filter';
import { Container, Title } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  submitForm = (values, { resetForm }) => {
    const oldContact = this.state.contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (oldContact) {
      alert(` ${values.name} is already in contacts.`);
      return;
    }

    const person = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => {
      return {
        contacts: [person, ...prevState.contacts],
      };
    });
    resetForm();
  };

  onFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(c => c.id !== id),
      };
    });
  };
  componentDidMount() {
    console.log('App didMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState, prevProp) {
    console.log('App didUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log('App render');
    const normalizedFilter = this.state.filter.toLowerCase();
    const newContacts = this.state.contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsReviewForm submitForm={this.submitForm} />
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactList contactsInfo={newContacts} deleteContact={this.onDelete} />
      </Container>
    );
  }
}