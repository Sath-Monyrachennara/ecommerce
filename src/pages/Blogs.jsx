import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const styles = {
  mainDes: {
    width: "40%",
    backgroundColor: "#fbdee2",
    marginLeft: "18px",
  },
  chatBtn: {
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#1c1c1c",
    padding: "5px 30px",
    borderRadius: "2px",
    margin: "25px 0px",
  },
  mainImg: {
    width: "520px",
  },
  p: {
    width: "255px",
  },
  blogBtn: {
    fontSize: "17px",
    borderBottom: "3px solid black",
    cusor: "pointer",
    textTranform: "uppercase",
    letterSpacing: "1px",
    marginTop: "20px",
    fontWeight: "500",
    paddingRight: "10px",
    paddingBottom: "7px",
  }
}

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-5'>
        <h2 className='text-center uppercase text-3xl font-nomarl'>Our Blogs</h2>
        <p className='text-sm text-center text-gray-500 mt-2'>Shopping with Herbivore Botanicals</p>
        <div className='mt-5 mb-10'>
          <div className='flex flex-row align-middle justify-center'>
            <div style={styles.mainImg}>
              <img src={require('../img/blogsImg/img1.webp')} />
            </div>
            <div className='text-center pt-10 px-7' style={styles.mainDes}>
              <h2 className='text-2xl font-medium mb-3'>Let’s Talk About Bakuchiol</h2>
              <p className='text-sm text-black mb-7'>OUR BAKUCHIOL SERUM  In 2019 we launched BAKUCHIOL Serum, a plant-based retinol alternative serum that helps hydrate skin and smooth the appearance of fine lines and wrinkles. Since its launch, this product has been exceptionally popular with our community of super natural skincare lovers, garnering hundreds of five-star reviews and thousands of repeat purchases. </p>
              <Link to="/contact" style={styles.chatBtn}>Let Chat</Link> 
            </div>
          </div>

          <h2 className='text-2xl font-medium mb-5 mt-10 pt-6 text-center'>More About Us!</h2>
          <div className='flex flex-row align-middle justify-center '>
            <div>
              <div>
                <img src={require('../img/blogsImg/img2.webp')} style={{width: "250px", height: "250px"}} />
              </div>
              <div>
                <h3 className='text-lg'>Natural Skincare Sustainability</h3>
                <p className='text-sm text-gray-500 mt-2 mb-4' style={styles.p}>Recently, our co-founder Alex Kummerow sat down with the Beautylish staff to chat about natural skincare, sustainability in the beauty industry.</p>
                <Link to="/shop" style={styles.blogBtn}>Discover</Link> 
              </div>
            </div>
            <div className='mx-5'>
              <div>
                <img src={require('../img/blogsImg/img7.webp')} style={{width: "250px", height: "250px"}} />
              </div>
              <div>
                <h3 className='text-lg'>Super Simple Skincare Rituals</h3>
                <p className='text-sm text-gray-500 mt-2 mb-4' style={styles.p}>Our skin is constantly in flux with each day’s changing conditions, including temperature, humidity, and hydration levels.</p>
                <Link to="/shop" style={styles.blogBtn}>Shop Now</Link> 
              </div>
            </div>
            <div>
              <div>
                <img src={require('../img/blogsImg/img5.webp')} style={{width: "250px", height: "250px"}} />
              </div>
              <div>
                <h3 className='text-lg'>The Power of Plants</h3>
                <p className='text-sm text-gray-500 mt-2 mb-4' style={styles.p}>There are many ways to buy and store whole food, and some are more sustainable than others. We’re following the below tips.</p>
                <Link to="/shop" style={styles.blogBtn}>Discover</Link> 
              </div>
            </div>
            <div>
              <div>
                <img src={require('../img/blogsImg/img11.jpg')} style={{width: "250px", height: "250px"}} />
              </div>
              <div>
                <h3 className='text-lg'>Herbivore Products</h3>
                <p className='text-sm text-gray-500 mt-2 mb-4' style={styles.p}>There are many ways to buy and store whole food, and some are more sustainable than others, healhty skin witho our products.</p>
                <Link to="/shop" style={styles.blogBtn}>Shop Now</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs
