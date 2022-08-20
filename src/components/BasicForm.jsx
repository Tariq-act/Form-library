import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id='email'
        type='email'
        placeholder='Enter your email'
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}
      <label htmlFor='age'>Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id='age'
        type='number'
        placeholder='Enter your age'
        className={errors.age && touched.age ? 'input-error' : ''}
      />
      {errors.email && touched.email && <p className='error'>{errors.age}</p>}
      <label htmlFor='password'>Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id='password'
        type='password'
        placeholder='Enter your password'
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      {errors.email && touched.email && (
        <p className='error'>{errors.password}</p>
      )}
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id='confirmPassword'
        type='password'
        placeholder='Enter your confirm password'
        className={
          errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''
        }
      />
      {errors.email && touched.email && (
        <p className='error'>{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
