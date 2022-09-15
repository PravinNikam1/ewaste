import React from "react";
import { Container } from "react-bootstrap";
import { Card, CardBody, CardHeader, Form, FormGroup, Label,Input,Button, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";


function DonarLogin(){
    return(

         <div>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size:4, offset:4}}>
                    <Card color="secondary" inverse>
                    <CardHeader>
                        <h3>Donar Login</h3>
                    </CardHeader>
                    <CardBody>
                        {/* Creating form*/}
                        <Form>

                            <FormGroup>
                                <Label for="username">Enter Username</Label>

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

                                <div><Button color="success"> Login</Button>   </div>

                                <Link className="navbar-brand" to="/forgotpassworddonar">
                                    <h5>Forgot Password?</h5>
                                </Link>
                

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
export default DonarLogin;