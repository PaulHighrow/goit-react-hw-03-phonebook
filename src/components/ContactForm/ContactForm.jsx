// Formik-версія

import PropTypes from 'prop-types';
import * as yup from 'yup';
import 'yup-phone';
import { Formik } from 'formik';
import { StyledForm, Label, Input, Error, Button } from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <Error component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Error component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// Ванільна версія
// import PropTypes from 'prop-types';
// import { Form, Label, Input, Button } from "./ContactForm.styled";

// export const ContactForm = ({ onSubmit }) => {

//   const handleSubmit = evt => { 
//     evt.preventDefault();
//     const { name, number } = evt.target.elements;
//     onSubmit(name.value, number.value)
//     name.value = '';
//     number.value = '';
//   }
  
//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>
//         Name
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </Label>
//       <Label>
//         Number
//         <Input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </Label>
//       <Button type="submit">Add contact</Button>
//     </Form>
//   );
// };

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }