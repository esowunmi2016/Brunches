import ScrollAnimation from 'react-animate-on-scroll';

import { Typography } from 'antd';

const { Title } = Typography;

function Location() {
  return ( 
    <div 
      id='location'
      style={{
        textAlign:'center',
        overflow:'hidden',
        background:'white'
      }}
    >
      <div style={{paddingTop:'5%'}}>
        <Title>Our Location</Title>
      </div>

      <div className='row'>
        
        <div className='col-md-7'>
          <ScrollAnimation
            animateIn='bounceIn'
            // animateOut='backOutLeft'
          >
            <iframe width='80%' height="450" style={{border:0, borderRadius:'10px'}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_VM4daeTOxARXL1CCGNOYik&key=AIzaSyAo9AWH5jYq5vtZUEbzQGroN4IKx93fY9E" />
          </ScrollAnimation>
        </div>

        <div className='col-md-4'>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <h1>Operational Hours</h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Monday 9am to 8pm</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Teusday 9am to 8pm</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Wednesday 9am to 8pm</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Thursday 9am to 8pm</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Friday 9am to 8pm</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Saturday 9am to 8pm</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInRight'
          >
            <p>Sunday Closed</p>
          </ScrollAnimation>
        </div>

      </div>
    </div>
  );
}

export default Location;