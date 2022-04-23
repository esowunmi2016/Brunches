import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";



import App from './App';
import Carousel1 from './components/carousel';
import Header1 from './components/header';
import Menu from './components/menu'
import Location from './components/location'
import Gallery from './components/gallery'
import Offer from './components/offer'
import Footer from './components/footer'
import Info from './components/info'



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Offer />
    <Header1 />
    <Carousel1 />
    <Menu />
    <Location />
    {/* <Gallery /> */}
    <Info />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
