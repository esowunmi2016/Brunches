import React from 'react';
import { Layout, Menu, Tooltip, Button, Drawer } from 'antd';
import {InstagramOutlined, FacebookOutlined, AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileOutlined,
  TeamOutlined,
  UploadOutlined,
  MailOutlined,} from '@ant-design/icons';

import logo from '../images/logo.jpg'
import { bgcolor } from '@mui/system';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


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

      header:window.innerWidth < 700 ? 'none':'inline',
      sider:window.innerWidth < 700 ? 'inline':'none',

      collapsed:false,

      drawerVisible:false,
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

  onDrawerClose(){
    this.setState({ drawerVisible: false });
  }

  onDrawerOpen(){
    this.setState({ drawerVisible: true });
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('resize', this.handleResize)

  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize=()=>{
    console.log(window.innerWidth)
    
    if(window.innerWidth < 700){
      this.setState({ header: 'none' });
      this.setState({ sider: 'inline' });
    }else{
      this.setState({ header: 'block' });
      this.setState({ sider: 'none' });
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  toggleDrawer(){
    this.setState({ drawerVisible: !this.state.drawerVisible });
  }
  
  
    

  render(){


    

    return(
      <div>
        {/* HORIZONTAL HEADER THAT IS DISPLAYED ON LARGER SCREENS */}
        <Header 
          style={{ 
            position: 'fixed', 
            zIndex: 2, 
            width: '100%', 
            backgroundColor: this.state.bg,
            display: this.state.header
          }} 
        >
          <a href='#carousel'>
            <div className="logo" style={{float:'left', width:'120px', height:'31px', margin:'16px 24px 16px 0', background:'rgba(255, 255, 255, 0.3)', backgroundImage:`url('${logo}')`, backgroundSize:'cover'}}/>
          </a>
{/* 
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
           

          </div> */}

          <Menu theme="dark" mode="horizontal" style={{backgroundColor: 'transparent',}}>
            
              <Menu.Item><a href='#menu'>Menu</a></Menu.Item>

              <Menu.Item key="3"><a href='#location'>Location </a></Menu.Item>
              
              <Menu.Item key="2"><a target='_blank' href='http://storefront.quickteller.com/brunches'>Store</a></Menu.Item>
              
              {/* <Menu.Item key="2"><a href='#gallery'>Gallery</a></Menu.Item> */}
            
              {/* <Menu.Item key="4">About Us</Menu.Item> */}
            
          </Menu>
        </Header>

        {/* VERTICAL SIDER THAT IS ONLY DISPLAYED ON SMALLER SCREENS */}
        <div style={{display:this.state.sider}}>
          <div className="pos-f-t">
           
{/* 
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">Toggleable via the navbar brand.</span>
              </div>
            </div> */}

            <nav 
              className="navbar navbar-dark fixed-top"
              style={{
                backgroundColor:this.state.bg,
                // background:'transparent'
              }}
            >
              
              <a className="navbar-brand" href="#carousel">
                <div style={{
                  height:'2rem',
                  width:'120px',
                  background:'white',
                  backgroundImage:`url('${logo}')`,
                  backgroundSize:'cover',
                }}>

                </div>
              </a>

              <button 
                className="btn btn-outline-dark" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarToggleExternalContent" 
                aria-controls="navbarToggleExternalContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                onClick={()=>this.toggleDrawer()}
                style={{
                  marginRight:"5%",
                  color:'red',

                }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            
            </nav>


          </div>
        </div>



        <Drawer 
          // title="Basic Drawer" 
          placement="right" 
          onClose={()=>this.onDrawerClose()} 
          visible={this.state.drawerVisible}
          width={150}
          // headerStyle={{backgroundColor:'#001529'}}
          // bodyStyle={{backgroundColor:'#001529'}}
        >

          <Menu
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['socials']}
            mode="inline"
            theme="light"
            inlineCollapsed={this.state.collapsed}
            style={{
              marginTop:'5px'
            }}
          >
            
              <Menu.Item key="1">
                <a href='#menu' onClick={()=>this.setState({drawerVisible : false})}>
                  Menu
                </a>
              </Menu.Item>
            <Menu.Item key="2">
              <a href='#location' onClick={()=>this.setState({drawerVisible : false})}>
                Location
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href='http://storefront.quickteller.com/brunches' target='_blank' onClick={()=>this.setState({drawerVisible : false})}>
                store
              </a>
            </Menu.Item>
{/* 
            <SubMenu key={'socials'} title='Socials'>
              <Menu.Item>
                <InstagramOutlined style={{fontSize:'150%'}} />
              </Menu.Item>
              <Menu.Item>
                <FacebookOutlined style={{fontSize:'150%'}} />
              </Menu.Item>
              <Menu.Item>
                  <i 
                  className="fa fa-whatsapp" 
                  aria-hidden="true" 
                  style={{fontSize: window.innerWidth < 750 ? '150%' : '200%', color:this.state.whatsappLogo, alignSelf:'end'}} 
                  onMouseOver={()=>this.onMouseOverLogo(3)}
                  onMouseOut={()=>this.onMouseOutLogo()}
                ></i>
              </Menu.Item>
            </SubMenu> */}
            
          </Menu>
          
        </Drawer>
      </div>
    )
  }
}

