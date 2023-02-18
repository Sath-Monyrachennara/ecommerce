import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Import images
//import img1 from '../img/homeImg/img26.png';


const styles = {
  header: {
    color: "#1d1d1d",
    letterSpacing: "1px",
  },
  p: {
    color: "#3c3c3c",
    width: "600px",
    marginBottom: "15px",
  },
  abimg: {
    width: "450px",
    height: "450px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  shopBtn: {
    fontSize: "17px",
    borderBottom: "2px solid black",
    cusor: "pointer",
    textTranform: "uppercase",
    letterSpacing: "1px",
    marginTop: "20px",
    fontWeight: "500",
    paddingRight: "10px",
    paddingBottom: "7px",
  },
  aboutBg: {
    backgroundColor: "#f2efef",
    padding: "10px 0px 30px",
    marginTop: "30px",
  },
  
}

const About = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='mt-7'>
        <h2 className='text-3xl text-center uppercase font-medium' style={styles.header}>About us</h2>
        <p className='text-sm text-center text-gray-500 mt-2 font-medium'>Herbivore believes in the power of nature.</p>
        <div style={styles.aboutBg}>
          <div className='flex flex-row align-middle justify-center mt-10 mb-20'>
            <div>
              <img src={require('../img/homeImg/img1.jpg')} style={styles.abimg} />
            </div>
            <div className='py-3 px-7'>
              <h2 className='text-2xl font-medium mb-3'>About Herbivore</h2>
              <div>
                <p style={styles.p}>We bring you products that are safe, truly natural and highly effective. All of our formulas are original, created and tested by us, on real people — never on animals and always from scratch. All of our products have an emphasis on natural, high-quality ingredients.  We package in glass and paper, using recycled & recyclable plastic only when necessary. </p>
                <p style={styles.p}>We are always free of synthetic ingredients, including dyes, fragrances, and parabens. By formulating without synthetic ingredients, we strive to create products to be as biocompatible as possible.</p>
                <p style={styles.p}>In addition to creating products that give you noticeable results, we also create our products with personal rejuvenation and a little indulgence in mind. We believe that daily bathing and skincare rituals should be enjoyable — a way to carve out some much-needed downtime in your hectic routine.</p>
              </div>
              <Link to="/shop" style={styles.shopBtn}>Shop Now</Link> 
            </div>
          </div>
          
          <div className='flex flex-row align-middle justify-center my-20'>
            <div className='py-3 px-7'>
              <h2 className='text-2xl font-medium mb-3'>Herbivore - Cloud Jelly</h2>
              <div>
                <p style={styles.p}>We bring you products that are safe, truly natural and highly effective. All of our formulas are original, created and tested by us, on real people — never on animals and always from scratch. All of our products have an emphasis on natural, high-quality ingredients.  We package in glass and paper, using recycled & recyclable plastic only when necessary. </p>
                <p style={styles.p}>In addition to creating products that give you noticeable results, we also create our products with personal rejuvenation and a little indulgence in mind. We believe that daily bathing and skincare rituals should be enjoyable — a way to carve out some much-needed downtime in your hectic routine.</p>
                <p style={styles.p}>We are always free of synthetic ingredients, including dyes, fragrances, and parabens. By formulating without synthetic ingredients, we strive to create products to be as biocompatible as possible.</p>
              </div>
              <Link to="/shop" style={styles.shopBtn}>Shop Now</Link> 
            </div>
            <div>
              <img src={require('../img/homeImg/img10.webp')} style={styles.abimg} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
