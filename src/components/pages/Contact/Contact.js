import React, { useState } from "react";
import './Contact.css'
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Cascader, Select, Row,  Card, Col, Checkbox,  Button, AutoComplete, } from 'antd';
import  {firebase,db} from '../firebase';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const { Option } = Select;

// const formItemLayout = {
//   labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
//   wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 12 } }
// }
// const tailFormItemLayout = {
//   wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
// };


const Contact = () => {
  // const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }} >
  //       <Option value="86">+91</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );
  // const suffixSelector = (
  //   <Form.Item name="suffix" noStyle>
  //     <Select style={{ width: 70 }} >
  //       <Option value="USD">$</Option>
  //       <Option value="CNY">¥</Option>
  //     </Select>
  //   </Form.Item>
  // );
  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('');
  const[message,setMessage]=useState('');
  const regexp = /[a-z]/gi;
  const ent= /^[7-9][0-9]{9}$/;


  const handleSubmit=(e)=>{

    e.preventDefault();

    if(!name || !name.match(regexp)){
      toast.error("Name is required");
      
    }
    if(!email || !email.match(regexp)){
      toast.error("Email is required");
      
    }
    if(!number || !number.match(ent)){
      toast.error("Phone No. is required");
      
    }
    if(!country || !country.match(regexp)){
      toast.error("Country Name is required");
      
    }
    if(!message || !message.match(regexp)){
      toast.error("Message is required");
      
    }

    if(name.match(regexp) && email.match(regexp) && number.match(ent) && country.match(regexp) && message.match(regexp)){

      db.collection('vapt')
      .add({
        name: name,
        email:email,
        number: number,
        country: country,
        message: message
      })
      .then(() => {
       console.log("success");
       toast.success("Submitted");
      })
      .catch((error) => {
        // alert(error.message)
        // setLoader(false)
        console.log("failed");
      })
}
    }

   



  return (
    <div id="contact" >
      <Row type="flex" justify="center" align="middle" >
        <Card className="card_in_contact" >
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "white", fontSize: "50px", marginBottom: "30px" }}>Contact&nbsp;Us</h1>
            <Row gutter={16}>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}  >
                <Form.Item style={{ marginBottom: "30px" }} name="name"   rules={[{ required: true, message: "Please input your Name" }]} >
                  <Input placeholder="Name" type="text" value={name} size="large" onChange={(e) => setName(e.target.value)} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{ marginBottom: "30px" }} name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!', }, { required: true, message: 'Please input your E-mail!' }]} >
                  <Input placeholder="Email" type="text" value={email} size="large" onChange={(e) => setEmail(e.target.value)} size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{ marginBottom: "30px" }} name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]} >
                  <Input placeholder="Phone Number" type="text" value={number} size="large" onChange={(e) => setNumber(e.target.value)} size="large" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{ marginBottom: "30px" }} name=" Country" rules={[{ required: true, message: "Please input your Country" }]} >
                  <Input placeholder="Country" type="text" value={country} size="large" onChange={(e) => setCountry(e.target.value)} size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                <Form.Item style={{ marginBottom: "30px" }} name="message" placeholder="Message">
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
  );
};

export default Contact;
