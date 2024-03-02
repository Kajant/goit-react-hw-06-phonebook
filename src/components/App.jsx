import { useState, useEffect } from 'react';
import React from 'react';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const contactsSample =  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

function App() {
      const [contacts, setContacts] = useState([]);
      const [filter, setFilter] = useState('');
    
      useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('contacts')));
        const data = localStorage.getItem('contacts')
          ? JSON.parse(localStorage.getItem('contacts'))
          : contactsSample;
        setContacts(data);
      }, []);
    
      useEffect(() => {
        console.log(contacts);
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]);
    
      const onAddContact = (name, number) => {
        const newContact = contacts.find(
          el => el.name.toLowerCase() === name.toLowerCase()
        );
        if (newContact) {
          alert(`${name} is already is in contacts.`);
          return;
        }
        setContacts([...contacts, { id: nanoid(), name, number }]);
      };
    
      const onFilterContact = event => setFilter(event.target.value);
    
      const deteteContact = id => {
        const newArray = contacts.filter(el => el.id !== id);
        setContacts(newArray);
      };
    
      const filteredContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    
      return (
        <div>
          <div className={css.wrapper}>
            <h1 className={css.title}>Phonebook</h1>
            <Form onAddContact={onAddContact} />
          </div>
          <div className={css.wrapper}>
            <h2 className={css.title}>Contacts</h2>
            <Filter onFilterContact={onFilterContact} filter={filter} />
            <Contacts contacts={filteredContacts} deteteContact={deteteContact} />
          </div>
        </div>
      );
    }
export default App;