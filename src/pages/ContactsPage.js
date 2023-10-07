import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppStyled, Title, SubTitle } from 'components/App.styled';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>

      <AppStyled>
        <Title>
          <b>Phonebook</b>
        </Title>
        <ContactForm />
        <Filter />
        <SubTitle>{/* <b>Contacts</b> */}</SubTitle>
        <ContactList />
      </AppStyled>
    </>
  );
}

// {
//   /* <ContactForm />
// <div>{isLoading && 'Request in progress...'}</div>
// <ContactList /> */
// }
