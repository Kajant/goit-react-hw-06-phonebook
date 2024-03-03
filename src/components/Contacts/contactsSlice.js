import { createSlice } from '@reduxjs/toolkit';

const contactsSample = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsSample,
    filter: '',
  },
  reducers: {
    addRecords(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteRecords(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterRecords(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addRecords, deleteRecords, filterRecords } =
  contactsSlice.actions;

export default contactsSlice.reducer;

export const getItem = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;