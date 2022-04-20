import { Carousel, Spin } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import { useState, useEffect } from 'react';


import img1 from '../images/8.jpeg'

const contentStyle = {
  height: '100vh',
  color: '#fff',
  lineHeight: '100%',
  textAlign: 'center',
  background: 'black',
};


function Carousel1() {

  const [loading, setLoading] = useState(true)
  console.log(loading)

  const handleLoading=(x)=>{
    setLoading(false, console.log(loading))
  }


  useEffect(()=>handleLoading(false),[])

  return (
    <>
      {
        loading===true ? (<div>Loading...</div>):(
        <>
        <div id='carousel'></div>
        <Spin spinning={loading}>
          <div className='sticky-top'  style={{height:'100vh', zIndex:'-1', maxWidth:'100%'}}>
            <Carousel autoplay>
              <div onLoad={()=>handleLoading(false)} style={{height:'100vh', width:'100vw'}} > 
                <div 
                  className='flex'
                  // onLoad={()=>handleLoading(false)}
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
        </Spin>
        </>
        )
      }
    </>
  );
}

export default Carousel1;
