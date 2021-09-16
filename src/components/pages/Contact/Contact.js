import React, { useState } from "react";
import './Contact.css'
import 'antd/dist/antd.css';
import { Form, Input, Row,  Card, Col, Button } from 'antd';
import  {db} from '../firebase';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [organisation, setOrganisation] = useState('');
  const[message,setMessage]=useState('');
  const regexp = /[a-z]/gi;
  const ent= /^[7-9][0-9]{9}$/;


  const handleSubmit=(e)=>{

    e.preventDefault();

    if(!name || !name.match(regexp)){
      toast.error("Name is required...!");
      
    }
    if(!email || !email.match(regexp)){
      toast.error("Invalid Email...!");
      
    }
    if(!number || !number.match(ent)){
      toast.error("Invalid Phone No....!");
      
    }
    if(!organisation || !organisation.match(regexp)){
      toast.error("Invalid Organisation...!");
      
    }
    if(!message || !message.match(regexp)){
      toast.error("Message is required");
      
    }

    if(name.match(regexp) && email.match(regexp) && number.match(ent) && organisation.match(regexp) && message.match(regexp)){

      db.collection('vapt')
      .add({
        name: name,
        email:email,
        number: number,
        organisation: organisation,
        message: message
      })
      .then(() => {
       toast.success("Submitted");
      })
      .catch((error) => {
        console.log("failed");
      })
      setName('');
      setEmail('');
      setNumber('');
      setOrganisation('');
      setMessage('');
}
    }

   



  return (
    <>
    <div id="contact" >
    <div className="cta">
      <h1>
        <strong className="ribbon-content">Incorporate Comprehensive Application Evaluation with Vulnerability Assessment & Penetration Testing </strong></h1>
    </div>
      <Row type="flex" justify="center" align="middle" >
        <Card className="card_in_contact" >
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "white", fontSize: "50px", marginBottom: "30px" }}>Contact&nbsp;Us</h1>
            <Row gutter={16}>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}  >
                <Form.Item style={{ marginBottom: "30px" }}    rules={[{ required: true, message: "Please input your Name" }]} >
                  <Input placeholder="Name" type="text" value={name} size="large" onChange={(e) => setName(e.target.value)} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{ marginBottom: "30px" }}  rules={[{ type: 'email', message: 'The input is not valid E-mail!', }, { required: true, message: 'Please input your E-mail!' }]} >
                  <Input placeholder="Email" type="text" value={email} size="large" onChange={(e) => setEmail(e.target.value)} size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{ marginBottom: "30px" }}  rules={[{ required: true, message: 'Please input your phone number!' }]} >
                  <Input placeholder="Phone Number" type="text" value={number} size="large" onChange={(e) => setNumber(e.target.value)} size="large" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{ marginBottom: "30px" }} rules={[{ required: true, message: "Please input your Country" }]} >
                  <Input placeholder="Organisation/Company" type="text" value={organisation} size="large" onChange={(e) => setOrganisation(e.target.value)} size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                <Form.Item style={{ marginBottom: "30px" }}  placeholder="Message">
                  <Input.TextArea placeholder="Message" type="text" value={message} size="large" onChange={(e) => setMessage(e.target.value)} />
                </Form.Item>
              </Col>
            </Row>
            <div className="" style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "200px", height: "45px", fontSize: "20px", borderRadius: "7px", background: "transparent" }}>
                Submit
              </Button>
            </div>
            <ToastContainer/>
          </form>
        </Card>
      </Row>
    </div>
    </>
  );
};

export default Contact;
