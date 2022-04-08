import { Carousel } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';


import img1 from '../images/8.jpeg'

const contentStyle = {
  height: '100vh',
  color: '#fff',
  lineHeight: '100%',
  textAlign: 'center',
  background: 'black',
};


function Carousel1() {
  return (
    <div id='carousel' style={{height:'100vh'}}>
      <Carousel autoplay>
        <div style={{height:'100vh', width:'100vw'}} > 
          <div 
            className='flex'
            style={{
              height:'100vh',
              width:'100vw',
              backgroundImage:`url('${img1}')`,
              backgroundSize:'cover',
              margin:'auto',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <div 
              style={{
                width:'70vw',
                height:'30vh',
                textAlign:'center',
              }}
            >
              <ScrollAnimation
                animateIn='fadeInDown'
                // animateOut='fadeOutdown'
              >
                <p 
                  style={{
                    color:'white',
                    fontFamily:'lobster',
                    fontSize:'12vmin',
                  }}
                >
                  Brunches Cafe
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn='fadeInDown'
                // animateOut='fadeOutdown'
              >
                <p
                  style={{
                    fontFamily:'lemonada',
                    // color:'#381c07',
                    color:'white'
                  }}
                >
                  A Perfect Meal Everytime...
                </p>
              </ScrollAnimation>
            </div>
           
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
