import React from 'react';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import { ConteinerLabel,FormButton } from './InputName.styled';
import { useDispatch} from 'react-redux';
import { add } from 'redux/addContact';



const userSchema  = Yup.object().shape({
  number: Yup.string()
  .trim()
  .required('This field is required!')
  .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  'Phone number must be digits')
  ,
  name: Yup.string()
  .trim()
  .required('This field is required!')
})
export const InputName = ({onCangeName}) =>{
  const disPatch = useDispatch()
    return (
        <Formik
        initialValues={{
            name: '',
            number: ''
          
        }}
        validationSchema={userSchema}

        onSubmit={(value, action) => {
          disPatch(add(value))
            action.resetForm()
        }}
        
        pattern='/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/'
      >
        {({ errors, touched }) => (
        <Form>

          <ConteinerLabel>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Enter a name" />
            {errors.name && touched.name ? (
               <div>{errors.name}</div>
            ) : null}
          </ConteinerLabel> 

          <ConteinerLabel>
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}
          </ConteinerLabel>

          <FormButton type="submit">Submit</FormButton>
        </Form>
         )} 
      </Formik>
    )
}