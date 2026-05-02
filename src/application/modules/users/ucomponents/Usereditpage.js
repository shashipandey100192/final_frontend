import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from 'axios';
import { baseurl } from '../../../service/Apiservice'
 import { ToastContainer, toast } from 'react-toastify';


function Usereditpage() {
const {id} = useParams();
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

    const singleuserdata = ()=>{
        axios.get(`${baseurl}/singleuser/${id}`).then((d)=>{
            setFormData(d.data.user[0]);
            console.log(d.data.user[0]);
        })
    }

    useEffect(()=>{
        singleuserdata()
    },[]);




    const updateuseer = (e) => {
       axios.patch(`${baseurl}/edituser/${id}`,formData).then((d)=>{
        console.log(d);
        toast.success(d.data.msg,{autoClose:2000});
        setTimeout(()=>{
            mynav("/landing/userlist");
        },2000)
       })
    }

  return (
    <Container>
            <Card className="shadow">
                <Card.Header className="bg-primary text-white text-center">
                    <h4>User Edit page</h4>
                </Card.Header>

                <Card.Body>

                    <Form>

                        <Row>

                            <Col md={6} className="mb-3">
                            <ToastContainer></ToastContainer>
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sname"
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                    value={formData.sname}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Roll</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="roll"
                                    placeholder="Enter Roll"
                                    onChange={handleChange}
                                    value={formData.roll}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="mobile"
                                    placeholder="Enter Mobile"
                                    onChange={handleChange}
                                    value={formData.mobile}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>DOB</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dob"
                                    onChange={handleChange}
                                    value={formData.dob}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" onChange={handleChange} value={formData.gender}>
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
                                    value={formData.fathername}
                                />
                            </Col>

                            <Col md={12} className="mb-3">
                                <Form.Label>Working Status</Form.Label>
                                <Form.Select name="working" onChange={handleChange} value={formData.working}>
                                    <option>Select</option>
                                    <option>Student</option>
                                    <option>Job</option>
                                    <option>Business</option>
                                    <option>Unemployed</option>
                                </Form.Select>
                            </Col>

                        </Row>

                        <div className="text-center">
                            <Button type="button" variant="success" className="px-5" onClick={updateuseer}>
                                Update
                            </Button>
                        </div>

                    </Form>

                </Card.Body>
            </Card>
        </Container>
  )
}

export default Usereditpage