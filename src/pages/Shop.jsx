import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Star } from "@mui/icons-material";

const Showstar = styled.div`
  color: #7391fe;
`;

const styles = {
  name: {
    fontSize: "17px",
    color: "#161616",
    margin: "3px 0px 0px",
  },
  price: {
    color: "#454545",
    margin: "5px 0px",
  },
  pro: {
    width: "20%",
    height: "auto",
  },
}

const Shop = () => {
  const [userData, setUserdata] = useState([]);

  useEffect( ()=> {
      const getUserdata = async()=>{
        const reqData = await fetch("http://localhost:3000/api/user");
        const resData = await reqData.json();
        setUserdata(resData);
        console.log(resData);
      }
  },[]);

  return (
    <div>
      <Navbar />
      <div className='mt-7 mb-10'>
        <h2 className='text-3xl text-center uppercase font-medium'>Latest Product</h2>
        <p className='text-sm text-center text-gray-500 mt-2 font-medium'>Shop with our quality products</p>
        <div className='mt-7'>
          <div className='flex flex-row align-middle justify-center'>
            <div className='text-center' style={styles.pro}>
              <div>
                <img src={require('../img/homeImg/img6.webp')} alt="" style={{width: "280px", height: "310px"}} />
              </div>
              <p style={styles.name}>Bakuchiol Retinol Alternative</p>
              <p style={styles.price}>$45.00</p>
              <Showstar>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </Showstar>
            </div>
            <div className='text-center mx-5' style={styles.pro}>
              <div>
                <img src={require('../img/homeImg/img7.webp')} alt="" style={{width: "280px", height: "310px"}} />
              </div>
              <p style={styles.name}>Peptides Retinol Alternative Serum</p>
              <p style={styles.price}>$60.00</p>
              <Showstar>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </Showstar>
            </div>
            <div className='text-center' style={styles.pro}>
              <div>
                <img src={require('../img/homeImg/img10.webp')} alt="" style={{width: "280px", height: "310px"}} />
              </div>
              <p style={styles.name}>Retinol Alternative Eye Cream</p>
              <p style={styles.price}>$125.00</p>
              <Showstar>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </Showstar>
            </div>
            <div className='text-center mx-5' style={styles.pro}>
              <div>
                <img src={require('../img/homeImg/img13.webp')} alt="" style={{width: "280px", height: "310px"}} />
              </div>
              <p style={styles.name}>Emerald Moisture Glow Oil</p>
              <p style={styles.price}>$50.00</p>
              <Showstar>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </Showstar>
            </div>
          </div>

          <div className='flex flex-row align-middle justify-center mt-8'>   
            <div className='text-center' style={styles.pro}>
                <div>
                  <img src={require('../img/homeImg/img12.webp')} alt="" style={{width: "280px", height: "310px"}} />
                </div>
                <p style={styles.name}>Lapis Blue Tansy Face Oil - For Oily</p>
                <p style={styles.price}>$74.00</p>
                <Showstar>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                </Showstar>
            </div>    
            <div className='text-center mx-5' style={styles.pro}>
                <div>
                  <img src={require('../img/homeImg/img14.webp')} alt="" style={{width: "280px", height: "310px"}} />
                </div>
                <p style={styles.name}>Pores Resurfacing Clarity Mask</p>
                <p style={styles.price}>$115.40</p>
                <Showstar>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                </Showstar>
            </div> 
            <div className='text-center' style={styles.pro}>
                <div>
                  <img src={require('../img/homeImg/img15.webp')} alt="" style={{width: "280px", height: "310px"}} />
                </div>
                <p style={styles.name}>Pink Cloud Soft Moisture Cream</p>
                <p style={styles.price}>$85.00</p>
                <Showstar>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                </Showstar>
            </div>
            <div className='text-center mx-5' style={styles.pro}>
                <div>
                  <img src={require('../img/homeImg/img11.webp')} alt="" style={{width: "280px", height: "310px"}} />
                </div>
                <p style={styles.name}>Pink Cloud Rosewater</p>
                <p style={styles.price}>$86.00</p>
                <Showstar>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                  <Star/>
                </Showstar>
            </div> 
          </div>      
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Shop
