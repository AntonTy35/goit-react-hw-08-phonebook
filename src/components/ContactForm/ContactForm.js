import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(20, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('Required!')
    .min(7, 'Too Short!')
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

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      handleAddContact(values);
      actions.resetForm();
    },
  });
  return (
    <Box bg="white" p={6} rounded="md">
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl
            isInvalid={formik.errors.name && formik.touched.name}
            isRequired
          >
            <FormLabel htmlFor="name">Enter new contact name</FormLabel>
            <Input
              id="name"
              name="name"
              type="name"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.name}
              focusBorderColor="blue.200"
              color="teal"
              placeholder="only letters"
            />
          </FormControl>

          <FormControl
            isInvalid={formik.errors.number && formik.touched.number}
            isRequired
          >
            <FormLabel htmlFor="number">
              Enter new contact phone number
            </FormLabel>
            <Input
              id="number"
              name="number"
              type="number"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.number}
              focusBorderColor="blue.200"
              color="teal"
              placeholder="minimum 7 characters..."
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Add contact
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
