import React, { useState } from "react";
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Card,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
const { Option } = Select;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};


const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);



  return (
    <div
      style={{


        background:
          "url(https://media-exp1.licdn.com/dms/image/C561BAQGfEhGPeVC6Yg/company-background_10000/0/1519798318510?e=2159024400&v=beta&t=7afXhqZPYPEH-PAMW_EJKhol_ZADnzfZubuIfyZ2nJI), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
        backgroundBlendMode: "overlay",

        width: "100%",
        height: "100%",
        backgroundSize: "100%",
        repeat: "no-repeat",

      }}
    >
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: "75%", marginBottom: "80px", borderRadius: "5px", border:"none", background:"transparent"}}>

          <Form>

            <h1 style={{ textAlign: "center", color:"white", fontSize:"50px" , marginBottom:"30px"}}>Contact Us</h1>


            <Row gutter={16}>

              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}  >
                <Form.Item style={{marginBottom:"30px"}}

                  name=" Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                >
                  <Input placeholder="Name" size="large"  style={{fontWeight:"bold", color:"black",}}/>
                </Form.Item>
              </Col>


              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{marginBottom:"30px"}}
                  name="email"

                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="Email" size="large"  style={{fontWeight:"bold", color:"black", }} />
                </Form.Item>
              </Col>
            </Row>



            <Row gutter={16}>
              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>

                <Form.Item style={{marginBottom:"30px"}}
                  name="phone"

                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <Input


                    placeholder="Phone Number" size="large"  style={{fontWeight:"bold", color:"black", }}
                  />
                </Form.Item>
              </Col>



              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item style={{marginBottom:"30px"}}

                  name=" Country"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Country",
                    },
                  ]}
                >
                  <Input placeholder="Country" size="large"  style={{fontWeight:"bold", color:"black",  }} />
                </Form.Item>


              </Col>
            </Row>
            <Row>
              <Col md={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                <Form.Item style={{marginBottom:"30px"}} name={['user', 'introduction']} placeholder="Message">
                  <Input.TextArea placeholder="Message"  style={{fontWeight:"bold", color:"black", }} />
                </Form.Item>

              </Col>
            </Row>

            <div className="" style={{ textAlign: "center" }}>

              <Button type="primary" htmlType="submit" style={{width:"200px", height:"45px", fontSize:"20px", borderRadius:"7px", background:"lightblue"}}>
                Submit
              </Button>
            </div>

          </Form>
        </Card>
      </Row>
    </div>
  );
};

export default Contact;
