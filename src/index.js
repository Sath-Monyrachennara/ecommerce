import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Gift from './pages/Gift';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Productdetail from './pages/Productdetail';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import "swiper/swiper.min.css";
//

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/blog' element={<Blogs />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/gift' element={<Gift />}></Route>
      <Route path='/signIn' element={<SignIn />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/proDetail' element={<Productdetail />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
