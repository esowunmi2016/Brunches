import {Tooltip} from 'antd'
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
import { useState } from 'react';


function Footer() {
  
  const [ig, setIg] = useState('white')
  const [fb, setFb] = useState('white')
  const [whatsapp, setWhatsapp] = useState('white')

  const onMouseOverLogo=(x)=>{
    if(x===1){
      setIg('#bc2a8d')
    }else if(x===2){
      setFb('#4267B2')
    }else if(x===3){
      setWhatsapp('#25D366')
    }
  }

  const onMouseOutLogo=()=>{
    setIg('white')
    setFb('white')
    setWhatsapp('white')
  }

  return ( 
    <div
      style={{
        height:'15vh',
        background:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
      }}
    >
      <div>
        <a className='px-2' href='https://www.instagram.com/the_brunches_cafe/' target='_blank'>
              <Tooltip title='Instagram' placement='bottom'>
                <InstagramOutlined 
                  onMouseOver={()=>onMouseOverLogo(1)}
                  onMouseOut={()=>onMouseOutLogo()}
                  style={{
                    fontSize:'200%',
                    color:ig,
                  }}
                />
              </Tooltip>
            </a>
            
            <a className='px-2' href='https://www.facebook.com/The_brunches_cafe-101304989181126/?hc_ref=ARSuKqMaM86YhYXGE3wlZuJgcLg7We92W7LDfMozEscdQ_c8wkpbPYMQsN8DtzDJOR8&fref=nf&__xts__[0]=68.ARC-kV_BiFS0U731sdcQ1_qXVEG1tDhzXP1pBwLPVaou_0kCbUVCEplUYSKL4iGPNY1AQM8DgSRHZgrizVfO8Fqw1qLdPuCSa9DBnKo3tyOkAd-57vyodLOfMhabyjUdtq_u55tfUQWMRRXlCmvNno55R44ji2E_ruyQExq3JdNRK-xfuv6Wfw274-6S55zM2l3xxmpGUUNZCZ2yPOw3yyPcya5lHU3fKI3byQrB0lU9uTOMICne6_GwPjsd8ul5AMpvWNcL5yLhrY4UOo6GsrbZjN025ikHGf3FM6psEh2Cq-PWa-Q' target='_blank'>
              <Tooltip title='Facebook' placement='bottom'>
                <FacebookOutlined 
                  onMouseOver={()=>onMouseOverLogo(2)}
                  onMouseOut={()=>onMouseOutLogo()}
                  style={{
                    fontSize:'200%',
                    color:fb,
                  }}
                />
              </Tooltip>
            </a>
            <Tooltip title='WhatsApp' placement='bottom'>
              <a className='px-2' href='https://wa.me/message/RHXDZNQ7IJ3PO1' target='_blank'>
                <i 
                  className="fa fa-whatsapp" 
                  aria-hidden="true" 
                  onMouseOver={()=>onMouseOverLogo(3)}
                  onMouseOut={()=>onMouseOutLogo()}
                  style={{
                    fontSize:'200%',
                    color:whatsapp
                  }}
                ></i>
              </a>
            </Tooltip>
           

      </div>
    </div>
  );
}

export default Footer