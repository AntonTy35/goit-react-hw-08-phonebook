import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStateContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filt) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filt.toLowerCase())
    );
  }
);
