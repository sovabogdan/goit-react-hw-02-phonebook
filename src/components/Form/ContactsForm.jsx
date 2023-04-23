import React, { Component } from 'react'
import {Form, Label, ContactInput, AddButton} from './ContactsForm.styled'

class ContactsForm extends Component{
    state = {
        name: '',
        number: ''
    };
      handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
  handleSubmit = e => {
      e.preventDefault();
      const { name, number } = this.state;
      if (this.props.oldContact(name)) {
              alert(` ${name} is already in contacts.`);
      return;
      };
      this.props.submitForm(name, number);
      this.setState({ name: '', number: '' });
    };
    
    render() {
        const { name, number } = this.state;
       return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor='name'>
                   Name:
                </Label>
                    <ContactInput
                        onChange={this.handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Enter contact name'
                    />
                
                <Label htmlFor='number'>
                   Number:
                </Label>
                    <ContactInput
                        onChange={this.handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Enter contact number'
                    />
                
                <AddButton type='submit'>Add contact</AddButton>
            </Form>
        );
};
   }
        
export default ContactsForm;

   