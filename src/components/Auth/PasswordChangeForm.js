import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

class PasswordChangeForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <Form onSubmit={handleSubmit}>    
          <div className='form-group'>
            <Field
              label='New Password'
            //   placeholder='foo@bar.com'
              name='password'
              type='password'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field
              label='Confirm Password'
            //   placeholder='foo@bar.com'
              name='confirmPassword'
              type='password'
              component={renderField}
            />
          </div>
          <Button
            disabled={submitting}
            className='btnCommon btnPrimary'
            type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.password || !values.confirmPassword) {
    errors.password = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password) ||
   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.confirmPassword)) {
    errors.confirmPassword = 'Invalid Email Address';
  }else if(values.password !== values.confirmPassword){
      errors.confirmPassword ="Password Must Match"
  }
  return errors;
}


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
    {touched && (error && <p className='error'>{error}</p>)}
  </div>
)

PasswordChangeForm = reduxForm({
  form: 'PasswordChangeForm',
  validate
})(PasswordChangeForm);

export default PasswordChangeForm;