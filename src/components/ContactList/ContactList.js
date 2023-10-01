import { useSelector } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';

import { selectStateContacts } from 'redux/contacts/selectors';

import { ContactListStyled, ContactItemStyled } from './ContactList.styled';

export const ContactList = () => {
  const stateContacts = useSelector(selectStateContacts);

  return (
    <ContactListStyled>
      {stateContacts.length > 0 ? (
        stateContacts.map(contact => (
          <ContactItemStyled key={contact.id}>
            <ContactItem contact={contact} />
          </ContactItemStyled>
        ))
      ) : (
        <ContactItemStyled>There is not contacts</ContactItemStyled>
      )}
    </ContactListStyled>
  );
};
