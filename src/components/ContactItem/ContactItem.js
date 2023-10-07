import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Td } from '@chakra-ui/react';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Td>{contact.name} :</Td>
      <Td>{contact.number}</Td>
      <Td>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </Td>
    </>
  );
};
