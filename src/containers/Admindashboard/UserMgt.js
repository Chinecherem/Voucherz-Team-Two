import React from 'react';
import AppHeader from '../../components/Header';
import axios from 'axios';
import { Table} from 'semantic-ui-react';
import Loading from "../VoucherLoader";
// import {FormGroup, Label, Input, Form} from 'reactstrap';



class UserMgt extends React.Component{

  state ={
    user : [],
    isLoading: false,
    search: ""
  }

  // changeHandler = (e)=>{
  //   e.preventDefault()
  //   this.setState({search: e.target.value})
  // }
  componentDidMount() {
      this.setState({isLoading: true})
    axios.get(`http://172.20.20.107:8080/merchants`)
      .then(res => {
        if(res.status === 200){
          const user = res.data;
          this.setState({ user: user, isLoading: false});
        }
       
      })
  }



    render(){
      
      return(
        <div className='ordersContainer'>
        <AppHeader pageTitle='User Management' />
        <div className='mainContainer'>
        {this.state.isLoading ? <Loading /> : null}
        <Table striped>
          <Table.Header>
            <Table.Row>
              {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email Address</Table.HeaderCell>
              <Table.HeaderCell>Mobile Number</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.state.user.map(item=> (
                <Table.Row key={item.email}>
                    {/* <Table.Cell >{item.id}</Table.Cell> */}
                    <Table.Cell >{item.firstname}</Table.Cell>                    
                    <Table.Cell>{item.lastname}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.mobileNo}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
            {/* <Table.Footer>
              <Pages />
            </Table.Footer> */}
        </Table>
        </div>
      </div>
      )
    }
  } 
  

export default UserMgt;
