// Thiscomponent is purely intended to get user data into our database
// IT SHOULD NOT ADD ANY FUNCTIONALITY OR BE A SOURCE OF DEPENDENCE TO ANY OTHER COMPONENT

import {useState, useEffect} from 'react'
import { Button, Modal, Form, Input, Card, message } from 'antd';
import axios from 'axios';

import img from '../images/13.jpg';


const success = () => {
    message.success({
      content: 'All set for your offer',
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
  };


  const fail = () => {
    message.error('Something went Wrong, try again in a little while', 2.5)
  };

function Offer() {
  
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [targeted, setTargeted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { Meta } = Card;

  useEffect(()=>{
    // window.localStorage.clear();
  },[])

  const showTarget=()=>{
    if(!window.localStorage.getItem('targeted') || window.localStorage.getItem('targeted') === null){
      window.localStorage.setItem('targeted', true)
      setTimeout(()=>showModal(),5000)
    }
  }
  

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };


  const onFinish = (values) => {
    console.log(values);

    setLoading(true)

    axios.post(`https://brunches-database.herokuapp.com/`, values)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if(res.status === 200){
          setLoading(false)
          handleCancel()
          success()
        }else{
          setLoading(false)
          handleCancel()
          fail()
        }
      })
  };

  


  return ( 
    
    <>
      <Modal
        title="Enter your details to claim This Offer"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={img} onLoad={showTarget()} />}
            >
              <Meta title="Offer/Deal name here" description="Offfer/Deal information here......." />
            </Card>
          </div>
          <div className='col-sm-6'>
            <Form id='myForm' onFinish={onFinish}>
              <div className='container-fluid py-4 px-4'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <Form.Item name='fname' rules={[{required:true}]} label='First Name'>
                        <Input />
                      </Form.Item>
                    </div>
                    
                    <div className='col-md-12'>
                      <Form.Item name='lname' rules={[{required:true}]} label='Last Name'>
                        <Input />
                      </Form.Item>
                    </div>

                    <div className='col-md-12'>
                      <Form.Item name='email' rules={[{required:true, type:'email'}]} label='Email '>
                        <Input />
                      </Form.Item>
                    </div>

                    {/* <div className='col-12'>
                      Phone Number
                    </div> */}
                    <div className='col-12'>
                      <Form.Item name='number' rules={[{required:true, message:'Invalid Phonenumber' ,pattern: new RegExp(/(070[0-9]{8}|080[0-9]{8}|090[0-9]{8})/)}]} label='Phone' >
                        <Input placeholder='Phone Number' />
                      </Form.Item>
                    </div>

                    <div className='col-sm-6'>
                      <Form.Item>
                        <div className='text-center'>
                          <Button type="primary" htmlType='submit' loading={loading}>
                            SUBMIT
                          </Button>
                        </div>
                      </Form.Item>
                    </div>

                  </div>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Offer;