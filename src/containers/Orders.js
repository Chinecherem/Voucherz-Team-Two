import React from 'react';
import AppHeader from '../components/AppHeader';
import {Header, Form, Button, TextArea} from 'semantic-ui-react'



const style={
  header:{
      padding: "20px",
      textAlign: "center",
      color:"red",
      fontSize: "40px"
    }
  }
const Redemption = () =>
  <div className='ordersContainer'>
    <AppHeader pageTitle='Redemption' />
    <div className='mainContainer'>
        <Header size="large" style={style.header}>Redeem your Voucher</Header>
        <Form size="large">
          <Form.Input  placeholder="Enter Merchant's Email" type="email" label="Merchant Email" required/>
          <Form.Input  placeholder="Enter Email" type="email" label="Email" required/>     
          <Form.Input  placeholder="Enter Voucher Code" type="text" label="Voucher Code" required/> 
          <TextArea placeholder="Tell us more" label="Additional Information" />
          <Button  inverted color='red'> Submit</Button>
        </Form>
    </div>
  </div>

export default Redemption;
