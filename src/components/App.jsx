import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppStyled } from './App.styled';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </AppStyled>
  );
};

// import { selectIsLoading, selectError } from 'redux/selectors';

// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);

// {/* {isLoading && !error && <b>Request in progress...</b>} */}
// {/* {isLoading && !error && toast.info('Request in progress...')} */}
