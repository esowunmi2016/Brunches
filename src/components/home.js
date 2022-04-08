import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import "antd/dist/antd.css";



// import App from './App';
import Carousel1 from './carousel';
import Header1 from './header';
import Menu from './menu'
import Location from './location'
import Gallery from './gallery'

function Home() {
  return ( 
    <div>
      {/* <App /> */}
      <Header1 />
      <Carousel1 />
      <Menu />
      <Location />
      {/* <Gallery /> */}
    </div>
   );
}

export default Home
