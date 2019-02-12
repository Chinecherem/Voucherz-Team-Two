import React from 'react';
import AppHeader from '../../components/Header';
import axios from 'axios';
import { Table} from 'semantic-ui-react';
import Loading from "../VoucherLoader";
// import {FormGroup, Label, Input, Form} fro m 'reactstrap';



class SessionMgt extends React.Component{

  state ={
    session : [],
    isLoading: false,
    search: ""
  }

  changeHandler = (e)=>{
    e.preventDefault()
    this.setState({search: e.target.value})
  }
  componentDidMount() {
      this.setState({isLoading: true})
    axios.get(`http://172.20.20.127:6000/api/session/token`)
      .then(res => {
        if(res.status === 200){
          const session = res.data;
          this.setState({ session: session, isLoading: false});
        }
       
      })
  }



    render(){
      
      return(
        <div className='ordersContainer'>
        <AppHeader pageTitle='Session Management' />
        <div className='mainContainer'>
        {this.state.isLoading ? <Loading /> : null}
        <Table striped>
          <Table.Header>
            <Table.Row>
              {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
              <Table.HeaderCell>Token Generated</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>Expiry</Table.HeaderCell>
              <Table.HeaderCell>Email Address</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.state.session.map(item=> (
                <Table.Row key={item.id}>
                    {/* <Table.Cell >{item.id}</Table.Cell> */}
                    <Table.Cell >{item.token}</Table.Cell>                    
                    <Table.Cell>{item.start}</Table.Cell>
                    <Table.Cell>{item.expires}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
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
  

export default SessionMgt;
