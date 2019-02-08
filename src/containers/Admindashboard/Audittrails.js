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
class AuditTrail extends React.Component{

  state ={
    trail : []
  }


  componentDidMount() {
    axios.get(`http://172.20.20.127:9000/voucherz/audittrails`)
      .then(res => {
        const trail = res.data;
        this.setState({ trail: trail});
        console.log(this.state.trail)
      })
  }



    render(){
      return(
        <div className='ordersContainer'>
        <AppHeader pageTitle='Audit Trails' />
        <div className='mainContainer'>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Occurred</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              {/* <Table.HeaderCell>Response Code</Table.HeaderCell>
             <Table.HeaderCell> Response Description</Table.HeaderCell>
             <Table.HeaderCell>Response Error</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.state.trail.map(item=> (
                <Table.Row key={item.occuredAt}>
                    <Table.Cell >{item.occuredAt}</Table.Cell>
                    <Table.Cell>{item.description}</Table.Cell>
                    <Table.Cell>{item.category}</Table.Cell>
                    {/* <Table.Cell>{item.content.code}</Table.Cell> */}
                    {/* <Table.Cell>{item.content.description}</Table.Cell> */}
                    {/* <Table.Cell>{item.content.errors}</Table.Cell> */}
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        </div>
      </div>
      )
    }
  } 
  

export default AuditTrail;
