import React from 'react';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';

function App() {
  return (
        <div>
          <div className={css.wrapper}>
            <h1 className={css.title}>Phonebook</h1>
            <Form/>
          </div>
          <div className={css.wrapper}>
            <h2 className={css.title}>Contacts</h2>
            <Filter/>
            <Contacts/>
          </div>
        </div>
      );
    }
    
export default App;