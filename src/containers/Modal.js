import React from 'react';
import {Modal, Button, ButtonToolbar} from "react-bootstrap";
import {Form, Label, Input, FormGroup, Button as CloseButton, ButtonGroup} from 'reactstrap';
// import {Redirect} from 'react-router-dom';
// import Voucher from './Voucher'


const style = {
    modal: {
        marginTop:"10px"
    }
}


class Details extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        smShow: false,
        fillForm: true,
        update: false,
        newUser:{
            voucherType: this.props.voucherType,
            category: this.props.category,
            startDate: "",
            expiryDate: "",
            charSet: this.props.charSet,
            length: this.props.length,
            prefix: this.props.prefix,
            suffix: this.props.length,
            numOfCode: this.props.numOfCode,
            additionalInfo: "",
            codeValue: this.props.codeValue
        },
        
      };
    }

    updateHandler = (e) =>{
       e.preventDefault();
       this.setState({fillForm: false, additionalInfo: "" })
    }

    changeHandler =(e) =>{
        const value= e.target.value;
        const name= e.target.name; 
        this.setState(
             prevState =>({
                 newUser: {
                     ...prevState.newUser,
                        [name]: value                        }
                     })
                    ) 
    }

    submitHandler = (evt) =>{
        evt.preventDefault();
        let UserData = this.state.newUser;
        // const URL = "https://172.20.20.107:8082/api/voucher/update/
        fetch(`http://172.20.20.107:8083/api/voucher-management-service/update/${this.props.id}`, {
            method: "PUT",
            body: JSON.stringify(UserData), 
            headers:{
                'Accept':  "application/json",
                'Content-Type': "application/json"
            },
        }).then(res =>{res.json()
            if(res.status === 200){
                this.setState({update: true})
                console.log(res)
               
            }
            console.log(res) 
        })  
    }

    componentDidUpdate (){
        if(this.state.update === true){
            console.log(true)
            window.location.reload(true);
        }
    }


    render() {  
      let smClose = () => this.setState({ smShow: false });
      return (
        <ButtonToolbar>
          <Button onClick={() => this.setState({ smShow: true })} bsStyle="success">
           Details
          </Button>
          <Modal
            style={style.modal}
            size="sm"
            show={this.state.smShow}
            onHide={smClose}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header>
              <Modal.Title id="example-modal-sizes-title-sm">
                <h1>{this.props.code}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label>Code</Label>
                        <Input type="text" value={this.props.code} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Voucher Type</Label>
                        <Input type="text" value={this.props.voucherType} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Category</Label>
                        <Input type="text" value={this.props.category} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Start Date</Label>
                        <Input type={this.state.fillForm === false ? "date" : ""} 
                        name="startDate"
                         value={this.state.fillForm === true ? this.props.expiryDate : this.state.newUser.startDate} 
                         readOnly={this.state.fillForm === false ? false : true}
                         onChange= {this.changeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Expiry Date</Label>
                        <Input type={this.state.fillForm === false ? "date" : ""}
                         name="expiryDate"
                          value={this.state.fillForm === true ? this.props.expiryDate : this.state.newUser.expiryDate} 
                          readOnly={this.state.fillForm === false ? false : true}
                          onChange={this.changeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Prefix</Label>
                        <Input type="text" value={this.props.prefix} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Suffix</Label>
                        <Input type="text" value={this.props.suffix} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Length</Label>
                        <Input type="text" value={this.props.length} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>CharSet</Label>
                        <Input type="text" value={this.props.charSet} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Value</Label>
                        <Input type="text" value={this.props.codeValue} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label>Additional Info</Label>
                        <Input type="text" 
                        name="additionalInfo" 
                        value={this.state.fillForm === true ? this.props.additionalInfo : this.state.newUser.additionalInfo} 
                        onChange={this.changeHandler}
                         readOnly={this.state.fillForm === false ? false : true} />
                    </FormGroup>
                    <ButtonGroup >
                        <CloseButton color="info" onClick={smClose}>Close</CloseButton>
                        <CloseButton color="info" onClick={this.updateHandler}>Update Voucher</CloseButton>
                        <CloseButton color="success" type="submit" >Submit</CloseButton>
                    </ButtonGroup>
                </Form>
            </Modal.Body>
          </Modal>
        </ButtonToolbar>
      );
    }
  }
  
 export default Details