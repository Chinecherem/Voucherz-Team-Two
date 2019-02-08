import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {withRouter} from 'react-router-dom';



class SignUpForm extends React.Component {

  state={
  newUser: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobileNo: "",
    confirmPassword: ""
   },
   confirm: false
  }
  
  changeHandler = (e) =>{
        const value= e.target.value;
        const name= e.target.name;
        this.setState(
          prevState =>({
            newUser:{
              ...prevState.newUser,
              [name]: value
            }
          })
      )
  }
  

  FormHandleSubmit =(e) =>{
    e.preventDefault();
    let userData = this.state.newUser
    
    console.log("HELLO WORLD, PLS LOG SUCCESSFULLY")
    fetch("http://172.20.20.107:8083/api/user-management-service/register",{
        method: "POST",
        body: JSON.stringify(userData),
        headers:{
            'Accept':  "application/json",
            'Content-Type': "application/json"
        },
    }).then(res => {
      res.json()
      console.log(res)
    }).then(response =>{
      console.log(response)
       // if(response.code === "202"){
          this.props.history.push("/confirmationPage")
      // }
    })
      .catch(error =>console.error(error))
  }


  render() {
   
    return (
      <div>
        <Form onSubmit={this.FormHandleSubmit}>    
          <div className='form-group'>
            <Field 
              value={this.state.firstname}
              onChange={this.changeHandler}
              label='First Name'
              placeholder='John'
              name='firstname'
              type='text'
              component={renderField}
            />
          </div>
         <div className='form-group'>
            <Field
              label='Last Name'
              placeholder='Doe'
              name='lastname'
              value={this.state.lastname}
              onChange={this.changeHandler}
              type='text'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field
              label='Email'
              placeholder='john@doe.com'
              name='email'
              value={this.state.email}
              onChange={this.changeHandler}
              type='email'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field
              label='Phone Number'
              name='mobileNo'
              value={this.state.mobileNo}
              onChange={this.changeHandler}
              type='text'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field 
              label='Password'
              placeholder='*********'
              name='password'
              type='password'
              value={this.state.password}
              onChange={ this.changeHandler}
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field 
              label='Confirm Password'
              placeholder='*********'
              name='confirmPassword'
              type='password'
              value={this.state.confirmPassword}
              onChange={ this.changeHandler}
              component={renderField}
            />
          </div>

          <Button
            className='btnCommon btnPrimary'
            type='submit'
            >Submit</Button>
        </Form>
      </div>
    );
  }
}

const validate = values => {

  const errors = {};

  if (!values.firstname || !values.lastname) {
    errors.name = 'Required';
  } else if ((values.firstname.length < 2) ||(values.lastname.length < 2)) {
    errors.name = 'Minimum 2 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if(!values.mobileNo){
    errors.mobileNo = 'Required';
  } else if(!/^[0]\d{10}$/.test(values.mobileNo)){
    errors.mobileNo = "Invalid Mobile Number"
  }

  if (!values.password && !values.confirmPassword) {
    errors.password = 'Required';
    errors.confirmPassword = 'Required'
  } else if (values.password.length > 8) {
    errors.password = 'Maximum 8 characters';
  } else if (values.password !== values.confirmPassword){
    errors.confirmPassword = "Password must be equal"
  } else if(!/^[a-zA-Z0-9]+$/.test(values.password)){
    errors.password = "Password must contain both letters and numbers"
  }

  return errors;
}

const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} placeholder={placeholder}/>
    {touched && (error && <p className='error'>{error}</p>)}
  </div>
)

SignUpForm = reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpForm);

export default withRouter(SignUpForm)