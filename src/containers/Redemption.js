import React from 'react';
import AppHeader from '../components/AppHeader';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Header} from 'semantic-ui-react'
import Loading from './VoucherLoader';

const style={
  header:{
      padding: "20px",
      textAlign: "center",
      fontSize: "40px"
    },
    form:{
     width: "50%",
    margin: "auto",
    border: "2px solid grey",
    padding: "50px"
    },
    Button: {
      marginLeft: "200px",
      marginTop: "30px",
      padding: "16px"
    },
    Label: {
       fontSize: "20px",

    }
    
  }
class Redemption extends React.Component{

        constructor(props){
            super(props)
            this.email = localStorage.getItem("email")
            this.state={
                newUser:{
                  Email: this.email,
                  VoucherCode: "",
                  Amount: ""
                },
                error: false,
                isLoading: false
              }
              this.token = localStorage.getItem("token")
        }
      

      stringChangeHandler =(e) => {
        const value= e.target.value;
        const name= e.target.name;
          this.setState(
            prevState =>({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            })
        )
    }

      emailHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value
        let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
          if( value === "" || reg.test(value)){
            this.setState(
              prevState =>({
                  newUser: {
                      ...prevState.newUser,
                      [name]: value  
                  }
              })
          )
          console.log(false)
        }else{
          console.log(true)
          e.preventDefault()
        }    
    }

    codeHandler = (e) =>{
      const name = e.target.name;
        const  value = e.target.value
            this.setState(
              prevState =>({
                  newUser: {
                      ...prevState.newUser,
                      [name]: value
                  }
              })
          )
    }

    amountHandler = (e) =>{
      const name = e.target.name;
        const value = e.target.value
        const reg =/^\d+(\.\d{1,2})?$/
       if(value === "" || reg.test(value)){
            this.setState(
              prevState =>({
                  newUser: {
                      ...prevState.newUser,
                      [name]: value
                  }
              })
          )
        }else{
          e.preventDefault()
          // this.setState({error: true})
        }
    }

    // isEnabled = () =>{
    //     if(this.state.newUser.Amount !== "" && this.state.newUser.VoucherCode !== "" && this.state.newUser.Email !== ""){
    //       // return true;
    //       console.log(false)
    //     }
    //     else{console.log( true)}
    // }

    formHandler = (e) =>{
      e.preventDefault()
      const UserData = this.state.newUser;
        // this.setState({isLoading: true})
      fetch(`http://172.20.20.127:7000/api/redemption/redeems/${this.token}`, {
        method: "POST",
        body: JSON.stringify(UserData),
        headers:{
            'Accept':  "application/json",
            'Content-Type': "application/json"
        },
    }).then(response =>{
        console.log(response)
        if(response.status === 200){
            this.setState({isLoading: true, isError: false})
            console.log(response.status)                    
            console.log("Successfully Submitted")
            this.props.history.push('/merchant/voucher')
           }

    }).then(body => console.log(body))
    .catch(error =>{
       console.error(error)
        
    } );
    console.log(UserData)
   
            }

  render(){
      const {isLoading} = this.state
    return(
      <div className='ordersContainer'>
      <AppHeader pageTitle='Redemption' />
      <div className='mainContainer'>
          {isLoading ? <Loading /> : null}
          <Header size="large" style={style.header}>Redeem your Voucher</Header>
          <Form onSubmit={this.formHandler} style={style.form}>
              <FormGroup>
                  <Label size='lg' style={style.Label}>Email</Label>
                  <Input type="email"
                //    placeholder="merchantemail@example.com" 
                   bsSize="lg" 
                   name="Email" 
                   value={this.state.newUser.Email}
                   onChange={this.stringChangeHandler} readOnly/>
              </FormGroup>
              <FormGroup>
                  <Label size="lg"  style={style.Label}>Voucher Code</Label>
                  <Input 
                  bsSize="lg" 
                  type="text" 
                  name="VoucherCode" 
                  value={this.state.newUser.VoucherCode}
                  onChange={this.codeHandler} required />
              </FormGroup>
              <FormGroup>
                  <Label size="lg"  style={style.Label}>Amount</Label>
                  <Input 
                  type="text"
                   bsSize="lg"  
                   name="Amount" 
                   value={this.state.newUser.Amount}
                   onChange={this.amountHandler} required/>
              </FormGroup>
              <Button color="danger" type="submit" size="lg"
              style={style.Button}>SUBMIT</Button>
          </Form>
      </div>
    </div>
    )
  }
}
 

export default Redemption;