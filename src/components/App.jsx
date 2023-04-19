import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title } from './App.styled';
import ContactsForm from './Form/ContactsForm';
import { Filter } from './Filter/Filter';
import ContactList from './Contacts/LIst/ContactList';


export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };


  addContact = (name, number) => {
        const newPerson = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => {
      return {
        contacts: [newPerson, ...prevState.contacts],
      };
      
    });
  }
   onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
    onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(c => c.id !== id),
      };
    });
  };
    
    
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
        const newContacts = this.state.contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFilter)
    );
     const oldContact = (values)=>this.state.contacts.find(
      person => person.name.toLowerCase() === values.toLowerCase()
    );
    return (
      <Container>
      <Title>Phonebook</Title>
        <ContactsForm submitForm={this.addContact} oldContact={oldContact} />  
        <Filter filter={this.state.filter} onFilter={this.onFilter} />
      <ContactList contactsInfo={newContacts} deleteContact={this.onDelete}/>
      </Container>
    )
  }  
};
  