import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import  Loader  from "../Loading";
import { Segment } from 'semantic-ui-react';
// import Success from '../Success';
// import {Redirect} from 'react-router-dom'
import {withRouter} from "react-router-dom"
// import {token} from "../../../components/AccessToken"



const style={
    form:{
        marginLeft: "100px",
        marginRight: "100px"
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
class ValueVoucher extends React.Component{

    constructor(props){
        super(props)

        this.state={
            newUser:{
                voucherType: "Value",
                category: '',
                startDate: '',
                expiryDate: '',
                charSet: "",
                length: "",
                prefix: "",
                suffix: "",
                numOfCode: '',
                codeValue: "",
                additionalInfo:""
            },
            isLoading: true,
            isError: false,
            token: localStorage.getItem("token")
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
       if(regex.test(e.target.value) || value === "" || value <= 3){
           this.setState(
                prevState =>({
                    newUser: {
                        ...prevState.newUser,
                        [name]: value
                    }
                })
            )   
       }else {
            e.preventDefault()
       }
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

    isEnabled =() =>{
        if(this.state.newUser.category !== "" && this.state.newUser.startDate !== "" && this.state.newUser.expiryDate !== ""
         && this.state.newUser.charSet !== "" && this.state.newUser.length !== "" && this.state.newUser.numOfCode !== "" && 
         this.state.newUser.prefix !== ""  && this.state.newUser.suffix !== ""  && this.state.newUser.codeValue !== ""){
           return(false)
        }else{
            return(true) 
    }
}
// componentWillMount(){
//     let token = localStorage.getItem("token");
//     this.setState({token})
//     console.log(this.state.token)
// }
 
    handleFormSubmit = (e) =>{
        e.preventDefault()
        let userData = this.state.newUser
        this.setState({isLoading: false})
                fetch(`http://172.20.20.107:8083/api/voucher-management-service/create/${this.state.token}`, {
                    method: "POST",
                    body: JSON.stringify(userData),
                    headers:{
                        'Accept':  "application/json",
                        'Content-Type': "application/json"
                    },
                }).then(res =>{
                    res.json();
                    console.log(res)
                    if(res.status === 201){
                        this.setState({isLoading: true, isError: false})
                        console.log(res.status)                    
                        console.log("Successfully Submitted")
                        this.props.history.push('/merchant/voucher')
                       }

                }).then(body => console.log(body))
                .catch(error =>{
                   console.error(error)
                    
                } );
                console.log(userData)
               
         }

    render(){
            if(this.state.isError){
                return(
                    <h1>Error Creating Vouchers</h1>
                )
            }
            else{
                return(
                    <Segment>
                        {this.state.isLoading ? null: <Loader />}
                      <Form style={style.form}  onSubmit={this.handleFormSubmit}> 
                         <FormGroup>
                         <Label size="lg" for="category">Category</Label>
                        <Input
                           required
                            bsSize="lg"
                            id="category"
                            type="text"
                            name="category"
                            value={this.state.newUser.category}
                            onChange={this.stringChangeHandler} />
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
                                    <Label size="lg">No. of Vouchers</Label>
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
                                        <option value="Alphabet">Alphabet</option>
                                        <option value="Alphanumeric"> Alphanumeric</option>
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
                                        placeholder="hu"
                                        value={this.state.newUser.codeValue}
                                        onChange={this.numberChangehandler}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label size="lg">Additional Info</Label>
                            <Input
                                
                                bsSize="lg"
                                type="textarea" 
                                name="additionalInfo"
                                value={this.state.newUser.additionalInfo}
                                onChange={this.stringChangeHandler}
                             />
                         </FormGroup>
                         
                       <Button 
                        disabled={this.isEnabled()} 
                        color="primary" type="submit" 
                        style={style.button}>Submit</Button>
                    </Form>
                  </Segment>
                )
            }
        
    }
}

export default withRouter(ValueVoucher)