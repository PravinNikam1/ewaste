import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card, CardBody, CardHeader, Form, FormGroup, Label,Input,Button, Row, Col, FormFeedback } from "reactstrap";
import { signUp } from "../../services/Donar-service";

import { toast } from "react-toastify";

function Register(){
        
    // To bind the data two way databinding
    const [data,setData]=useState({
        "firstName": "",
        "lastName": "",
        "mobileNo": "",
        "userName": "",
        "password": "",
        "address": ""
    })


    //useEffect Hook as datachange it will call callback mentioned in it

    // useEffect(()=>{
    //     console.log(data);
    // },[data])



    //to send error
    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    //to handlechange see the console when we clicked input it will show each change in console

    const handleChange=(event,property)=>{
       // console.log("name changed");
       //console.log(event.target.value)  //to handlechange see the console when we clicked input it will show each change in console
        //dynamic setting the values
       setData({...data,[property]:event.target.value})

    }

    //resetdata function set default values of data
    const resetData=()=>{
        setData({
            "firstName": "",
            "lastName": "",
            "mobileNo": "",
            "userName": "",
            "password": "",
            "address": ""
        })
    }

    //submit the form on submit btn call onSubmit event on Form
    const submitForm=(event)=>{
        event.preventDefault()

        // if(error.isError){
        //    toast.error("Form data is invalid,correct all details then submit");
        //    setError({...error,isError:false})
        //     return;
        // }
        //if error is comming it will prevent to fill next details and erromessage will be displayed
        //due to abve setError it will first go to server validate the data and the n show message 
        //toast message will shown alternate first it will check to the server then come back
        //and check the next line for eoor
        //if we dont use this it will not go to server till we not go to server to check till all fields are correct 


        console.log(data)

        //data Validation



        //call api from server for sending the data 
        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log");
            toast.success("Donar registered Successfully !!"+resp.userName); //to show the message after registration
            setData({
                "firstName": "",
                "lastName": "",
                "mobileNo": "",
                "userName": "",
                "password": "",
                "address": ""
            });
            // above setData will automatically clear the input fields after succsessfull registratin of user . all field values will be set to empty in registration fields (this is done because of two way databindibg)
        }).catch((error)=>{
            console.log(error)
            console.log("Error Log")
            //Handle errors in proper way
            setError({
                errors:error,
                isError:true
            })

        })

    };

    return(

         <div>
            <Container>
                <Row className="mt-4">

                    {JSON.stringify(data)}
                    <Col sm={{size:4, offset:4}}>
                    <Card color="secondary" inverse>
                    <CardHeader>
                        <h3>Register as EWaste Donar</h3>
                    </CardHeader>
                    <CardBody>

                        {/* Creating form*/}
                        <Form onSubmit={submitForm}>
                            {/*First Name field */}
                            <FormGroup>
                                <Label for="firstName">Enter First Name</Label>

                                <Input
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'firstName')}
                                    value={data.firstName}
                                    invalid={ error.errors?.response?.data?.firstName ?true :false}
                                    />
                                   {/* if error occuer input will field will become true and color become red and no eroor then field will remian as it is
                                    and ? is called as null safe object if undefined it will not create problem to us
                                   */}

                                   <FormFeedback>
                                        {error.errors?.response?.data?.firstName}
                                   </FormFeedback>

                            </FormGroup>

                            <FormGroup>
                                <Label for="lastName">Enter Last Name</Label>

                                <Input
                                    id="lastName"
                                    placeholder="Enter Lirst Name"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'lastName')}
                                    value={data.lastName}
                                    invalid={ error.errors?.response?.data?.lastName ?true :false}
                                    />
                                    
                                    <FormFeedback>
                                        {error.errors?.response?.data?.lastName}
                                   </FormFeedback>

                            </FormGroup>

                            <FormGroup>
                                <Label for="mobileNo">Enter Mobile Number</Label>

                                <Input
                                    id="mobileNo"
                                    placeholder="Enter Mobile Number"
                                    type="number"
                                    onChange={(e)=>handleChange(e,'mobileNo')}
                                    value={data.mobileNo}
                                    invalid={ error.errors?.response?.data?.mobileNo ?true :false}
                                    />
                                <FormFeedback>
                                        {error.errors?.response?.data?.mobileNo}
                                </FormFeedback>

                            </FormGroup>

                            {/* <FormGroup>
                                <Label for="address.addressLine1">Address Line 1</Label>

                                <Input
                                    id="address.addressLine1"
                                    placeholder="Enter Apartment/Company Name"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'address.addressLine1')}
                                    value={data.addressLine1}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="address.addressLine2">Address Line 2</Label>
                                <Input
                                    id="addressLine2"
                                    placeholder="Enter Street address/Landmark"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'addressLine2')}
                                    value={data.addressLine2}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="pincode">Enter ZIP/Posatlcode</Label>

                                <Input
                                    id="pincode"
                                    placeholder="Enter ZIP/Posatlcode"
                                    type="number"
                                
                                    onChange={(e)=>handleChange(e,'pincode')}
                                    value={data.pincode}
                                    />
                            </FormGroup> */}
                             <FormGroup>
                                <Label for="userName">Enter Address Details</Label>

                                <Input
                                    id="address"
                                    placeholder="Enter Address Details"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'address')}
                                    value={data.address}
                                    invalid={ error.errors?.response?.data?.address ?true :false}
                                    />

                                <FormFeedback>
                                        {error.errors?.response?.data?.address}
                                </FormFeedback>

                            </FormGroup>

                            <FormGroup>
                                <Label for="userName">Create UserName</Label>

                                <Input
                                    id="userName"
                                    placeholder="Enter Username"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'userName')}
                                    value={data.userName}
                                    invalid={ error.errors?.response?.data?.userName ?true :false}
                                    />
                                
                                <FormFeedback>
                                        {error.errors?.response?.data?.userName}
                                </FormFeedback>

                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Enter Password</Label>

                                <Input
                                    id="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    onChange={(e)=>handleChange(e,'password')}
                                    value={data.password}
                                    invalid={ error.errors?.response?.data?.password ?true :false}
                                    />

                                <FormFeedback>
                                        {error.errors?.response?.data?.password}
                                </FormFeedback>

                            </FormGroup>

                            <Container className="text-center">

                                <Button color="success"> Register</Button>
                                <Button onClick={resetData} color="warning" className="ms-3" type="reset"> Reset</Button>
                                <Button color="danger" className="ms-3"> Cancel</Button>

                            </Container>

                        </Form>
                    </CardBody>
                </Card>
                    </Col>
                </Row>
                


            </Container>
        </div>

        
    )
}
export default Register;