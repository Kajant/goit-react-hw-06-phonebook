import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecords, getItem, getFilter } from './contactsSlice';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  const deteteRecord = id => {
    dispatch(deleteRecords(id));
  };
  const filteredRecords = () => {
    if (filter === '') {
      return false;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filterOne = filteredRecords();
  const listContacts = filterOne ? filterOne : contacts;
  return (
    <>
      <ul className={css.contactList}>
        {listContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <span>
              {name} - {number}
            </span>
            <button className={css.btn} onClick={() => deteteRecord(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};


Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;