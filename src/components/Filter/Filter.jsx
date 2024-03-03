import { useDispatch, useSelector } from 'react-redux';
import {
  getFilter,
  filterRecords,
} from '../Contacts/contactsSlice';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const onFilterRecord = event => {
      dispatch(filterRecords(event.target.value.toLowerCase()));
    };

    return (
        <div className={css.filter}>
            <p className={css.info}>Find contacts by name</p>
            <input className={css.input} type="text" name="filter" placeholder="name" value={filter} onChange={onFilterRecord} />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterInput: PropTypes.func,
};

export default Filter;