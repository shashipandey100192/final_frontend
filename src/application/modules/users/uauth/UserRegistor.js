import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

function UserRegistor() {
    const mynav = useNavigate();

    const [formData, setFormData] = useState({
        sname: "",
        roll: "",
        mobile: "",
        email: "",
        dob: "",
        password: "",
        gender: "",
        fathername: "",
        working: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        axios.post("http://localhost:9700/studentform",formData).then((d)=>{
    
            if(d.data.status===202)
            {
                toast.success(d.data.msg,{autoClose:2000});
                setTimeout(()=>{
                        mynav('/')
                },2000)
            }
            if(d.data.status===350)
            {
                alert(d.data.msg);
            }
            if(d.data.status===355)
            {
                alert(d.data.errorstype)
            }
            
        })
    }

    return (
        <Container className="mt-5">
            <Card className="shadow">
                <Card.Header className="bg-primary text-white text-center">
                    <h4>Student Registration</h4>
                </Card.Header>

                <Card.Body>

                    <Form>

                        <Row>

                            <Col md={6} className="mb-3">
                                <Form.Label>Student Name</Form.Label>
                                <ToastContainer></ToastContainer>
                                <Form.Control
                                    type="text"
                                    name="sname"
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Roll</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="roll"
                                    placeholder="Enter Roll"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="mobile"
                                    placeholder="Enter Mobile"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>DOB</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dob"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" onChange={handleChange}>
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Select>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Father Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fathername"
                                    placeholder="Father Name"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col md={12} className="mb-3">
                                <Form.Label>Working Status</Form.Label>
                                <Form.Select name="working" onChange={handleChange}>
                                    <option>Select</option>
                                    <option>Student</option>
                                    <option>Job</option>
                                    <option>Business</option>
                                    <option>Unemployed</option>
                                </Form.Select>
                            </Col>

                        </Row>

                        <div className="text-center">
                            <Button type="button" variant="success" className="px-5" onClick={handleSubmit}>
                                Register
                            </Button>
                        </div>

                    </Form>

                </Card.Body>
            </Card>
        </Container>
    );
}

export default UserRegistor;




