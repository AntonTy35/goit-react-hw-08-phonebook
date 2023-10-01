import { useDispatch } from 'react-redux';
import { ContactData } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactData>{contact.name} :</ContactData>
      <ContactData>{contact.number}</ContactData>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        <b>Delete</b>
      </button>
    </>
  );
};
