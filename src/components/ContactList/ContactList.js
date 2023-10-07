import { useSelector } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';

import { selectStateContacts } from 'redux/contacts/selectors';

import {
  Table,
  Thead,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Tbody,
} from '@chakra-ui/react';

export const ContactList = () => {
  const stateContacts = useSelector(selectStateContacts);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone number</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stateContacts.length > 0 ? (
            stateContacts.map(contact => (
              <Tr key={contact.id}>
                <ContactItem contact={contact} />
              </Tr>
            ))
          ) : (
            <Td>There is not contacts</Td>
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Phone number</Th>
            <Th>Delete</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
