import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card, CardBody, CardHeader, Form, FormGroup, Label,Input,Button, Row, Col } from "reactstrap";


function Register(){
        
    // To bind the data two way databinding
    const [data,setData]=useState({
        "firstName": "",
        "lastName": "",
        "mobileNo": "",
        "userName": "",
        "password": "",
        "address": {
            "addressLine1": "",
            "addressLine2": "",
            "pincode": ""
        }
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
            "address": {
                "addressLine1": "",
                "addressLine2": "",
                "pincode": ""
            }
        })
    }

    //submit the form on submit btn call onSubmit event on Form
    const submitForm=(event)=>{
        event.preventDefault()

        console.log(data)

        //data Validation



        //call api from server for sending the data

    }

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

                            <FormGroup>
                                <Label for="firstName">Enter First Name</Label>

                                <Input
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'firstName')}
                                    value={data.firstName}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="lastName">Enter Last Name</Label>

                                <Input
                                    id="lastName"
                                    placeholder="Enter Lirst Name"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'lastName')}
                                    value={data.lastName}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="mobileNo">Enter Mobile Number</Label>

                                <Input
                                    id="mobileNo"
                                    placeholder="Enter Mobile Number"
                                    type="number"
                                    onChange={(e)=>handleChange(e,'mobileNo')}
                                    value={data.mobileNo}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="addressLine1">Address Line 1</Label>

                                <Input
                                    id="addressLine1"
                                    placeholder="Enter Apartment/Company Name"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'addressLine1')}
                                    value={data.addressLine1}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="addressLine2">Address Line 2</Label>
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
                            </FormGroup>

                            <FormGroup>
                                <Label for="userName">Create UserName</Label>

                                <Input
                                    id="userName"
                                    placeholder="Enter Username"
                                    type="text"
                                    onChange={(e)=>handleChange(e,'userName')}
                                    value={data.userName}
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Enter Password</Label>

                                <Input
                                    id="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    onChange={(e)=>handleChange(e,'password')}
                                    value={data.password}
                                    />
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