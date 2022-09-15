import React from "react";
import { Container } from "react-bootstrap";
import { Card, CardBody, CardHeader, Form, FormGroup, Label,Input,Button, Row, Col } from "reactstrap";


function WasteDetails(){
    return(

         <div>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size:4, offset:4}}>
                    <Card color="secondary" inverse>
                    <CardHeader>
                        <h3>Enter Waste Details</h3>
                    </CardHeader>
                    <CardBody>
                        {/* Creating form*/}
                        <Form>

                            <FormGroup>
                                <Label for="fname">Enter First Name</Label>

                                <Input
                                    id="fname"
                                    placeholder="Enter First Name"
                                    type="text"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="lname">Enter First Name</Label>

                                <Input
                                    id="lname"
                                    placeholder="Enter Lirst Name"
                                    type="text"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="mobileno">Enter Mobile Number</Label>

                                <Input
                                    id="mobileno"
                                    placeholder="Enter Mobile Number"
                                    type="number"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="addressline1">Address Line 1</Label>

                                <Input
                                    id="addressline1"
                                    placeholder="Enter Apartment/Company Name"
                                    type="text"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="addressline2">Address Line 2</Label>

                                <Input
                                    id="addressline2"
                                    placeholder="Enter Street address/Landmark"
                                    type="text"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="postalcode">Enter ZIP/Posatlcode</Label>

                                <Input
                                    id="postalcode"
                                    placeholder="Enter ZIP/Posatlcode"
                                    type="number"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="username">Create UserName</Label>

                                <Input
                                    id="username"
                                    placeholder="Enter Username"
                                    type="text"
                                    />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Enter Password</Label>

                                <Input
                                    id="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    />
                            </FormGroup>

                            <Container className="text-center">

                                <Button color="success"> Register</Button>
                                <Button color="warning" className="ms-3" type="reset"> Reset</Button>
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

export default WasteDetails;