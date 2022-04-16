// Thiscomponent is purely intended to get user data into our database
// IT SHOULD NOT ADD ANY FUNCTIONALITY OR BE A SOURCE OF DEPENDENCE TO ANY OTHER COMPONENT

import {useState, useEffect} from 'react'
import { Button, Modal, Form, Input, Card } from 'antd';

import img from '../images/13.jpg';

function Offer() {
  
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [targeted, setTargeted] = useState(false);

  const { Meta } = Card;

  useEffect(()=>{
    window.localStorage.clear();
  },[])

  if(!window.localStorage.getItem('targeted') || window.localStorage.getItem('targeted') === null){
    window.localStorage.setItem('targeted', true)
    setTimeout(()=>showModal(),5000)
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


  return ( 
    <>
      <Modal
        title="Enter your details to claim This Offer"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={img} />}
            >
              <Meta title="Offer/Deal name here" description="Offfer/Deal information here......." />
            </Card>
          </div>
          <div className='col-sm-6'>
            <Form id='myForm'>
              <div className='container-fluid py-4 px-4'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <Form.Item name='name' rules={[{required:true}]} label='Name'>
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
                      <Form.Item name='number' rules={[{required:true, type:'number'}]} label='#' >
                        <Input placeholder='Phone Number' />
                      </Form.Item>
                    </div>

                    <div className='col-sm-6'>
                      <Form.Item>
                        <div className='text-center'>
                          <a href='https://www.w3schools.com'>
                            <Button type="primary" >
                              Buy Now
                            </Button>
                          </a>
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