import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addRecords, getItem } from '../Contacts/contactsSlice';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log("Error");
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const newContactName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (newContactName) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    dispatch(addRecords(newContact));
    reset();
  };


  return (
    <form
      className={css.form}
      onSubmit={onFormSubmit}
    >
      <label className={css.label}>Name
        <input
          className={css.input}
          value={name}
          onChange={onInputChange}
          type="text"
          name="name"
          placeholder="name"
          required
        />
      </label>
      <label className={css.label}>Number
              <input
                  className={css.input}
          value={number}
          onChange={onInputChange}
          type="tel"
            name="number"
            placeholder="123-45-67"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};
export default Form;