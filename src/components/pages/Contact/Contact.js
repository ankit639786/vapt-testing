import React from 'react';
import './Contact.css';

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
    <>
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

            <h1 style={{ textAlign: "center", color:"white" }}>Contact Us</h1>


            <Row gutter={16}>

              <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}  >
                <Form.Item

                  name=" Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                >
                  <Input placeholder="Name" size="large" />
                </Form.Item>
              </Col>


    const homeObjFour = {
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: '',
        headline: 'Contact Us',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet',
        buttonLabel: 'Lorem ipsum',
        imgStart: 'start',
        img: 'images/svg-8.svg',
        alt: 'Vault'
    };

    return (
        <>
            <div id="contact" className={homeObjFour?.lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container' style={{paddingTop:"3rem"}}>
                    <div className='row home__hero-row' style={{ display: 'flex', flexDirection: homeObjFour?.imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                {homeObjFour?.topLine&&<div className='top-line'>{homeObjFour?.topLine}</div>}
                                <h1 className={homeObjFour?.lightText ? 'heading' : 'heading dark'}>
                                    {homeObjFour?.headline}
                                </h1>
                                <p className={ homeObjFour?.lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark' } >
                                    {homeObjFour?.description}
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <form className="myForm" style={{marginTop:"-50px",backgroundColor:"#09091e"}}>
                                    <div id="contact-details">
                                        <label for="customer_name">Name </label>
                                        <input type="text" name="customer_name" id="customer_name" required />
                                        <label for="email_address">Email </label>
                                        <input type="email" name="email_address" id="email_address" />
                                        <label for="phone">Phone </label>
                                        <input type="tel" name="phone" id="phone" />
                                    </div>
                                    <div id="comment-box">
                                        <label for="comments">Comments</label>
                                        <textarea name="comments" id="comments" maxlength="500"></textarea>
                                    </div>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                       
            </div>
        </>
    )
}

export default Contact;
