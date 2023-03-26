import { Component } from 'react'
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    name: ''
  };
  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleSubmit = name => {
    const person = {
      id: nanoid(),
      name,
    };
    this.setState(prevState => {
      return {
        contacts: [person, ...prevState.contacts],
      };
      
    });
    console.log(this.state.contacts);
  }
  render() {
    return (
      <>
      <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
              <input
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {/* <ul>
          {this.state.contacts.map(contact => {
            <li>
              {contact}
            </li>
          })}
        </ul> */}
      </>
  )
}
  };

