import React from 'react';
import Slider from '../components/Slider';
import Featuerpro from '../components/Featuerpro';
import Icons from '../components/Icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <Featuerpro />
        <Icons />
        <Footer />
    </div>
  )
}

export default Home
