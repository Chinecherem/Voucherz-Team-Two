import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

class PasswordResetForm extends React.Component {


  // changeHandler = (e) =>{
  //   this
  // }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <Form onSubmit={handleSubmit}>    
          <div className='form-group'>
            <Field
              label='Email'
              placeholder='foo@bar.com'
              name='email'
              type='email'
              value={this.props.value}
              component={renderField}
              onChange={this.props.changeMail}
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

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
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

PasswordResetForm = reduxForm({
  form: 'PasswordResetForm',
  validate
})(PasswordResetForm);

export default PasswordResetForm;