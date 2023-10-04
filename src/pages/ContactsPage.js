import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

import { AppStyled } from 'components/App.styled';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>

      <AppStyled>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
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
