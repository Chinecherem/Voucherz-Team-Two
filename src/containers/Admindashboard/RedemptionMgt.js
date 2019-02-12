import React from 'react';
import AppHeader from '../../components/Header';
import axios from 'axios';
import { Table} from 'semantic-ui-react';
import Loading from "../VoucherLoader";



class RedemptionMgt extends React.Component{

    constructor(props){
      super(props)
      this.state ={
        redemption : [],
        isLoading: false,
        search: ""
      }
      this.token = localStorage.getItem("admin")
    }
 

  changeHandler = (e)=>{
    e.preventDefault()
    this.setState({search: e.target.value})
  }
  componentDidMount() {
      this.setState({isLoading: true})
    axios.get(`http://172.20.20.127:7000/api/redemption/getallvouchers/1/10/${this.token}`)
    // console.log(this.token)
      .then(res => {
       let redemption = (res.data)
      //  console.log(redemption)
       this.setState({redemption})
      //  console.log(this.state.redemption)
       console.log(this.state.redemption)
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
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Code</Table.HeaderCell>
              <Table.HeaderCell>Code Status</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>Expiry Date</Table.HeaderCell>
              <Table.HeaderCell>Voucher Value</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Balance</Table.HeaderCell>
              <Table.HeaderCell>Voucher Category</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* <Table.Body>
              {this.state.redemption.map(item=> (
                  <Table.Row key={item.redeemedVouchers.id}>
                    <Table.Cell >{item.status}</Table.Cell>                    
                    <Table.Cell>{item.redeemedVouchers._content.code}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.code_Status}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.startDate}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.expiryDate}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.VoucherValue}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.amount}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.balance}</Table.Cell>
                    <Table.Cell>{item.redeemedVouchers._content.VoucherType}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body> */}
            {/* <Table.Footer>
              <Pages />
            </Table.Footer> */}
        </Table>
        </div>
      </div>
      )
    }
  } 
  

export default RedemptionMgt;
