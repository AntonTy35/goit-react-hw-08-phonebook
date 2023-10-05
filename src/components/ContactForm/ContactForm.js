import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Invalid name format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(20, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(20, 'Too Long!'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = value => {
    const isContact = contacts.find(contact => {
      return contact.name === value.name || contact.number === value.number;
    });

    isContact
      ? toast.error(`This name or number is already in contacts.`)
      : dispatch(addContact({ id: nanoid(), ...value }));
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            handleAddContact(values);
            actions.resetForm();
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Fullname</FormLabel>
                  <Field as={Input} name="name" type="name" />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="number">Phone number</FormLabel>
                  <Field
                    as={Input}
                    name="number"
                    type="number"
                    validate={value => {
                      let error;

                      if (value.length < 6) {
                        error = 'Password must contain at least 6 characters';
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Add contact
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
