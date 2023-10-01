import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Label, ButtonSubmit } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

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

const FormStyled = styled(Form)`
  width: 300px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
`;

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
      <FormStyled>
        <Label>
          <b>Name</b>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          <b>Number</b>
          <Field type="number" name="number" />
          <ErrorMessage name="number" component="div" />
        </Label>

        <ButtonSubmit type="submit">
          <b>Add contact</b>
        </ButtonSubmit>
      </FormStyled>
    </Formik>
  );
};
