import React from 'react';
import { Formik, Form, Field } from 'formik';

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ name: 'jared' }}>
      {(props) => (
        <Form>
          <Field type='text' name='name' placeholder='Name' />

          {/* <input
            type='text'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name='name'
          /> */}

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
