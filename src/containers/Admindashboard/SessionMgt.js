import React from 'react';
import AppHeader from '../../components/Header';
import axios from 'axios';
import { Table} from 'semantic-ui-react';



// const style={
//   header:{
//       padding: "20px",
//       textAlign: "center",
//       color:"red",
//       fontSize: "40px"
//     }
//   }
class SessionMgt extends React.Component{

  state ={
    session : []
  }


  componentDidMount() {
    axios.get(`http://172.20.20.127:6000/api/session`)
      .then(res => {
        const session = res.data;
        this.setState({ session: session});
        console.log(this.state.session)
      })
  }



    render(){
      return(
        <div className='ordersContainer'>
        <AppHeader pageTitle='Seession Management' />
        <div className='mainContainer'>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Secret Key</Table.HeaderCell>
              <Table.HeaderCell>Expiry Minute</Table.HeaderCell>
              <Table.HeaderCell>Issuer</Table.HeaderCell>
              <Table.HeaderCell>Date Created</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.state.session.map(item=> (
                <Table.Row key={item.id}>
                    <Table.Cell >{item.id}</Table.Cell>
                    <Table.Cell>{item.secretKey}</Table.Cell>
                    <Table.Cell>{item.expiryMin}</Table.Cell>
                    <Table.Cell>{item.dateCreated}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        </div>
      </div>
      )
    }
  } 
  

export default SessionMgt;
