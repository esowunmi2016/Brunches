import React from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import {InstagramOutlined, FacebookOutlined, } from '@ant-design/icons';

import logo from '../images/logo.jpg'

const { Header, Content, Footer } = Layout;


export default class Header1 extends React.Component{
  constructor(){
    super()
    this.state = {
      igHover:false,
      fbHover:false,
      whatsappHover:false,

      bg: 'transparent',

      igLogo:'white',
      fbLogo:'white',
      whatsappLogo:'white',
    }
  }


  scrollHandler=()=>{
    // console.log(window.pageYOffset)

    if(window.pageYOffset <= 10){
      this.setState({bg: 'transparent'});
    }else{
      this.setState({bg: 'rgba(0,0,0,0.7)'});
      // this.setState({ bg: 'black'  });
    }
  }

  onMouseOverLogo=(x)=>{
    if(x===1){
      this.setState({igLogo:'#bc2a8d'})
      this.setState({igHover:true})
    }else if(x===2){
      this.setState({fbLogo:'	#4267B2'})
      this.setState({fbHover:true})
    }else if(x===3){
      this.setState({whatsappLogo:'#25D366'})
      this.setState({whatsappHover:true})
    }
  }

  onMouseOutLogo=()=>{
    this.setState({igLogo:'white'})
    this.setState({igHover:false})

    this.setState({fbLogo:'white'})
    this.setState({fbHover:false})

    this.setState({whatsappLogo:'white'})
    this.setState({whatsappHover:false})
      
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollHandler);
  }
    

  render(){
    return(
      <div>
        <Header 
          style={{ 
            position: 'fixed', 
            zIndex: 2, 
            width: '100%', 
            backgroundColor: this.state.bg,
          }} 
        >
          <a href='#carousel'>
            <div className="logo" style={{float:'left', width:'120px', height:'31px', margin:'16px 24px 16px 0', background:'rgba(255, 255, 255, 0.3)', backgroundImage:`url('${logo}')`, backgroundSize:'cover'}}/>
          </a>

          <div style={{float:'right'}}>

            <a className='px-2' href='https://www.instagram.com/the_brunches_cafe/' target='_blank'>
              <Tooltip title='Instagram' placement='bottom'>
                <InstagramOutlined 
                  style={{fontSize: window.innerWidth < 750 ? '150%' : '200%', color:this.state.igLogo, alignSelf:'end'}} 
                  onMouseOver={()=>this.onMouseOverLogo(1)}
                  onMouseOut={()=>this.onMouseOutLogo()}
                />
              </Tooltip>
            </a>
            
            <a className='px-2' href='https://www.facebook.com/The_brunches_cafe-101304989181126/?hc_ref=ARSuKqMaM86YhYXGE3wlZuJgcLg7We92W7LDfMozEscdQ_c8wkpbPYMQsN8DtzDJOR8&fref=nf&__xts__[0]=68.ARC-kV_BiFS0U731sdcQ1_qXVEG1tDhzXP1pBwLPVaou_0kCbUVCEplUYSKL4iGPNY1AQM8DgSRHZgrizVfO8Fqw1qLdPuCSa9DBnKo3tyOkAd-57vyodLOfMhabyjUdtq_u55tfUQWMRRXlCmvNno55R44ji2E_ruyQExq3JdNRK-xfuv6Wfw274-6S55zM2l3xxmpGUUNZCZ2yPOw3yyPcya5lHU3fKI3byQrB0lU9uTOMICne6_GwPjsd8ul5AMpvWNcL5yLhrY4UOo6GsrbZjN025ikHGf3FM6psEh2Cq-PWa-Q' target='_blank'>
              <Tooltip title='Facebook' placement='bottom'>
                <FacebookOutlined 
                  style={{fontSize: window.innerWidth < 750 ? '150%' : '200%', color:this.state.fbLogo, alignSelf:'end'}} 
                  onMouseOver={()=>this.onMouseOverLogo(2)}
                  onMouseOut={()=>this.onMouseOutLogo()}
                />
              </Tooltip>
            </a>
            <Tooltip title='WhatsApp' placement='bottom'>
              <a className='px-2' href='https://wa.me/message/RHXDZNQ7IJ3PO1' target='_blank'>
                <i 
                  className="fa fa-whatsapp" 
                  aria-hidden="true" 
                  style={{fontSize: window.innerWidth < 750 ? '150%' : '200%', color:this.state.whatsappLogo, alignSelf:'end'}} 
                  onMouseOver={()=>this.onMouseOverLogo(3)}
                  onMouseOut={()=>this.onMouseOutLogo()}
                ></i>
              </a>
            </Tooltip>
           

          </div>

          <Menu theme="dark" mode="horizontal" style={{backgroundColor: 'transparent',}}>
            
              <Menu.Item key="1"><a href='#menu'>Menu</a></Menu.Item>

              <Menu.Item key="3"><a href='#location'>Location </a></Menu.Item>
              
              <Menu.Item key="2"><a target='_blank' href='http://storefront.quickteller.com/brunches'>Store</a></Menu.Item>
              
              {/* <Menu.Item key="2"><a href='#gallery'>Gallery</a></Menu.Item> */}
            
              {/* <Menu.Item key="4">About Us</Menu.Item> */}
            
          </Menu>
        </Header>
      </div>
        
    )
  }
}

