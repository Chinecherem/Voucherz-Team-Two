import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
// import auth from "./RequireAuth";
import { withRouter} from 'react-router-dom';
import Loading from "../../containers/VoucherLoader"

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
      iserror: false,
      isLoading: false    
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
  this.setState({isLoading: true})
  fetch("http://172.20.20.107:8083/api/user-management-service/login",{
      method: "POST",
      body: JSON.stringify(userData),
      headers:{
          'Accept':  "application/json",
          'Content-Type': "application/json"
      },
  }).then(response => response.json())
  .then(body =>{
    console.log(body)
    if(body.code === "202"){
      this.setState({isLoading: false})
        if(body.merchant.role === 'ROLE_USER'){
          localStorage.setItem('token', body.response.token)
          localStorage.setItem('email', body.merchant.email)
          this.props.history.push('/merchant');
        } else if (body.merchant.role === 'ROLE_ADMIN'){
            console.log(body.merchant.role)
          localStorage.setItem('email', body.merchant.email)
          localStorage.setItem("admin", body.response.token)
          this.props.history.push("/admin")
        }
        console.log(body)
    } else{
        this.setState({iserror: true, isLoading: false})
    }
  })
  .catch(error => console.log(error));
}

  render() {
    return (
     
      <div>
         {this.state.isLoading ? <Loading /> : null }
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
          disabled={this.state.newUser.email !== "" && this.state.newUser.password !== "" ? false : true}
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