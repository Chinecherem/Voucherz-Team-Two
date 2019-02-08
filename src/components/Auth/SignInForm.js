import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
// import auth from "./RequireAuth";
import { withRouter} from 'react-router-dom';
import {token} from "../AccessToken"

const style={
  error:{
    textAlign: "center",
    color: "red"
  }
}

class SignInForm extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      newUser: {
        email: "",
        password: ""
      },
      iserror: false      
    }
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

formHandler = () =>{
  let userData = this.state.newUser
  fetch("http://172.20.20.107:8080/login",{
      method: "POST",
      body: JSON.stringify(userData),
      headers:{
          'Accept':  "application/json",
          'Content-Type': "application/json"
      },
  }).then(response => response.json())
  .then(body =>{
    console.log("this is body", body.response.token, body.merchant.email, body.merchant.role)
    if(body.code === "202"){
        if(body.merchant.role === 'ROLE_USER'){
          localStorage.setItem("token", body.response.token)
          this.props.history.push(`/merchant/${token}`);
        } else if (body.role === 'ROLE_ADMIN'){
          localStorage.setItem("admin", body.response.token)
          this.props.history.push("/admin")
          // localStorage.setItem("admin", body.session)
        }
        console.log(body)
    } else{
        this.setState({iserror: true})
    }
  } )
  .catch(error => console.error(error));
}

  render() {
    return (
      <div>
        {this.state.iserror ? <p style={style.error}>Invalid email or password</p>: null}
        <Form>    
          <div className='form-group'>
            <Field
              label='Email'
              placeholder='foo@bar.com'
              name='email'
              type='email'
              value={this.state.newUser.email}
              onChange={this.changeHandler}
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field 
              label='Password'
              placeholder='*********'
              name='password'
              type='password'
              value={this.state.newUser.password}
              onChange={this.changeHandler}
              component={renderField}
            />
          </div>

          <Button
           onClick={this.formHandler}
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

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 8) {
    errors.password = 'Maximum 8 characters';
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

SignInForm = reduxForm({
  form: 'SignInForm',
  validate
})(SignInForm);

export default withRouter(SignInForm);