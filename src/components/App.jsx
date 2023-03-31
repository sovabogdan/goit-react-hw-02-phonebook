import { Component } from 'react'
import { nanoid } from 'nanoid';
import {Container} from './App.styled'

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };
   handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPerson = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => {
      return {
        contacts: [newPerson, ...prevState.contacts],
        name: '',
        number: '',
      };
      
    });
  };
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

    return (
      <Container>
      <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder='Enter contact name'
            />
          </label> 
          <label>
              Number
              <input
                onChange={this.handleChange}
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder='Enter contact number'
            />
            </label>
            <button type='submit'>Add contact</button>
        </form>
        <label>
          Find contact
         { <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.onFilter}
            placeholder='Enter contact name'
          />}
        </label>
        <h2>Contacts</h2>
        <ul>
        {newContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type='button' onClick={() => this.onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </Container>
    )
  }  
};
  