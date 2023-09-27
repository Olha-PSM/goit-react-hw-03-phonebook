import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledField,
  Label,
  StyledForm,
  Button,
  ErrorMsg,
} from './ContactForm.styled';

// import { nanoid } from 'nanoid';
// import React, { Component } from 'react';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" type="text" />
          <ErrorMsg name="name" component="div" />
        </Label>
        <Label>
          Number
          <StyledField name="number" type="number" />
          <ErrorMsg name="number" component="div" />
        </Label>

        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
