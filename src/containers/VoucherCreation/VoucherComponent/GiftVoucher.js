import React from 'react';
// import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FormLoader from "../Loading";
import { Segment } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import {token} from "../../../components/AccessToken"



const style={
    form:{
        marginLeft: "70px",
        marginRight: "70px"
    },
    button:{
        padding: "20px",
        textAlign: "center",
        marginTop: "20px",
        marginLeft: "500px"
    },
    input: {
        
    },
    options:{
    },
    formText:{
        fontSize: "16px"
    }
   
}

class GiftVoucher extends React.Component{

    constructor(props){
        super(props)

        this.state={
            newUser:{
                voucherType: "Gift",
                category: '',
                startDate: "",
                expiryDate: "",
                charSet: "",
                length: "",
                prefix: "",
                suffix: "",
                numOfCode: '',
                codeValue: "",
                additionalInfo: ""
            },
                isLoading: true,
                successLoading: false,
                isError: false     
        }
    }

    numberChangehandler = (e) =>{
        const value= e.target.value;
        const name= e.target.name;
        const reg =  /^[1-9]\d*$/g
        if( value === "" || reg.test(e.target.value)){
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
        }

    }

   prefixSuffixHandler = (e) =>{
    const value= e.target.value;
    const name= e.target.name;
       const regex = /^[a-z]+$/i;
       if(regex.test(e.target.value) || value === ""){
           this.setState(
                prevState =>({
                    newUser: {
                        ...prevState.newUser,
                        [name]: value
                    }
                })
            )
        //    
       }else {
            e.preventDefault()
       }
   }


    stringChangeHandler =(e) => {
        // e.persist()
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

    isEnabled = () =>{
        if(this.state.newUser.category !== "" && this.state.newUser.startDate !== "" && this.state.newUser.expiryDate !== ""
         && this.state.newUser.charSet !== "" && this.state.newUser.length !== "" && this.state.newUser.numOfCode !== "" && 
         this.state.newUser.prefix !== ""  && this.state.newUser.suffix !== ""  && this.state.newUser.codeValue !== ""){
           return(false)

        }else{
            return(true) 
    }
}


handleFormSubmit = (e) =>{
    e.preventDefault()
    let userData = this.state.newUser
    this.setState({isLoading: false})
            fetch(`http://172.20.20.107:8083/api/voucher-management-service/create/${token}`, {
                method: "POST",
                body: JSON.stringify(userData),
                headers:{
                    'Accept':  "application/json",
                    'Content-Type': "application/json"
                },
            }).then(res =>{
                res.json();
                if(res.status === 201){
                    this.setState({isLoading: true})
                    console.log(res.status)                    
                    console.log("Successfully Submitted")
                    this.props.history.push('/merchant/voucher')
                   }else{
                    this.setState({isError: true})
                   }
                   this.setState({
                     newUser:{
                         voucherType: "Value",
                         category: '',
                         startDate: "",
                         expiryDate: "",
                         charSet: "",
                         length: "",
                         prefix: "",
                         suffix: "",
                         numOfCode: '',
                         codeValue: "",
                         additionalInfo: ""
                     }
                 })
                
            })
            .catch(error =>{
                console.error('Error:', error || 'Problem tryin to upload')
                
            } );
    }

    // componentDidUpdate =(prevProps, prevState) =>{
    //     if(this.state.isLoading){
    //         setTimeout(() =>{
    //             this.setState({isLoading: false, successLoading: true})
    //         }, 5000)
            
    //     }

    // }

    render(){
        const {isLoading, isError} = this.state
        return(
            <div>
                <Segment>
                {isLoading  ? null : <FormLoader />}
                {isError === false ? <p>error creating Voucher, Pls kindly review your form fields again</p>: null}
              <Form style={style.form}  onSubmit={this.handleFormSubmit}>
                 <FormGroup>
                     <Label for="category" size="lg">Select Category</Label>
                     <Input
                        required
                        bsSize="lg"
                        id="category"
                        type="select"
                        name="category"
                        value={this.state.newUser.category}
                        onChange={this.stringChangeHandler}>
                         <option value="select">Choose...</option>
                         <option value="New Customer">New Customer</option>
                         <option value="Old Customer"> Old Customer</option>
                    </Input>
                 </FormGroup> 
                 <Row form>
                     <Col md={6}>
                         <FormGroup>
                             <Label size="lg">Start Date</Label>
                                <Input
                                required  
                                bsSize="lg"
                                type="date" 
                                name="startDate"
                                value={this.state.newUser.startDate}
                                onChange={this.stringChangeHandler}/> 
                         </FormGroup>
                     </Col>
                     <Col md={6}>
                        <FormGroup>
                            <Label size="lg">Expiry Date</Label>
                            <Input
                            required
                            bsSize="lg"
                             type="date"
                             name="expiryDate"
                              value={this.state.newUser.expiryDate}
                              onChange={this.stringChangeHandler}/> 
                         </FormGroup>
                     </Col>
                 </Row>
                <Row form>
                    <Col md={6}>
                         <FormGroup>
                           <Label size="lg">Prefix</Label>
                           <Input
                           required
                           bsSize="lg"
                             type="text" 
                             name="prefix"
                             placeholder="enter prefix" 
                             value={this.state.newUser.prefix}
                             onChange={this.prefixSuffixHandler}/>
                         </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label size="lg">Suffix</Label>
                            <Input 
                            required
                            bsSize="lg"
                            type="text" 
                            name="suffix"
                            placeholder="enter prefix"
                             value={this.state.newUser.suffix}
                            onChange={this.prefixSuffixHandler}/>
                       </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                         <FormGroup>
                            <Label size="lg">Voucher Length</Label>
                           <Input 
                           required
                           bsSize="lg"
                           type="text" 
                            name="length"
                            placeholder="Enter  field" 
                            value={this.state.newUser.length}
                            onChange={this.numberChangehandler}/> 
                         </FormGroup>
                    </Col>
                    <Col md={6}>
                         <FormGroup>
                            <Label size="lg"> No. of Vouchers</Label>
                            <Input
                            required
                              bsSize="lg" 
                              type="text"
                              name="numOfCode"
                              placeholder="hu" 
                              value={this.state.newUser.numOfCode}
                              onChange={this.numberChangehandler}/>
                         </FormGroup>
                    </Col>
                </Row>          
                <Row form>
                    <Col md={6}>
                         <FormGroup>
                             <Label size="lg">Charset</Label>
                                <Input
                                required
                                bsSize="lg"
                                type="select"
                                name="charSet"
                                value={this.state.newUser.charSet}
                                onChange={this.stringChangeHandler}> 
                               <option value="select">Choose...</option>
                               <option value="Integer">Integer</option>
                              <option value="AphaNumeric"> Alphanumeric</option> 
                             <option value="Alphabet"> Alphabet</option> 
                          </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                         <FormGroup>
                            <Label size="lg">Value</Label>
                            <Input 
                            required
                                bsSize="lg"
                                type="text"
                                name="codeValue"
                                placeholder="12"
                                value={this.state.newUser.codeValue}
                                onChange={this.numberChangehandler}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label size="lg">Additional Info</Label>
                    <Input
                    required
                        bsSize="lg"
                        type="textarea" 
                        name="additionalInfo"
                        value={this.state.newUser.additionalInfo}
                        onChange={this.stringChangeHandler} 
                     />
                 </FormGroup>
               <Button
                disabled={this.isEnabled()}
                color="primary" 
                type="submit"
                style={style.button}>Submit</Button>
            </Form>
            </Segment>
          </div>
        )
    }
}
export default withRouter( GiftVoucher)