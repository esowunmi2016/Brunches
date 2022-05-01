import { Carousel } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';


import img1 from '../images/8.jpeg'
import img2 from '../images/17.png'
import img3 from '../images/18.jpg'
import img4 from '../images/19.jpg'
import img5 from '../images/20.jpg'
import logo from '../images/brunchesWhite.png'

function Carousel1() {
  return (
    <div className='position-relative' style={{overflowX:'hidden', maxWidth:'100vw'}}>
      <div id='carousel'></div>
      <div className='postition-relative' style={{width:'100vw', height:'100vh',}}>
        <Carousel autoplay effect='fade' autoplaySpeed={10000} arrows speed={1000}>
          <div>
            <div 
              style={{
                height:'100vh', 
                background:`url(${img1})`, 
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
              }} 
            />
          </div>
         
          <div>
            <div 
              style={{
                height:'100vh', 
                background:`url(${img2})`, 
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
                
              }} 
            />
          </div>
         
          <div>
            <div 
              style={{
                height:'100vh', 
                background:`url(${img3})`, 
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
                
              }} 
            />
          </div>
         
          {/* <div>
            <div 
              style={{
                height:'100vh', 
                background:`url(${img4})`, 
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
                
              }} 
            />
          </div>
         
          <div>
            <div 
              style={{
                height:'100vh', 
                background:`url(${img5})`, 
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
                
              }} 
            />
          </div>
          */}
        </Carousel>
        
        <div
          className='position-absolute'
          style={{
            height:'100%',
            width:'100%',
            top:'0px',
          }}
        >
          <div className='row d-flex justify-content-center align-items-center' style={{height:'100%'}}>
            <div className='col-md-5 col-9 d-flex align-items-center'>
              <ScrollAnimation animateIn='fadeInDown'>
                <img 
                  src={logo}
                  style={{
                    width:'100%',
                    height:'auto',
                  }}
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    
      
    </div>
  );
}

export default Carousel1;
