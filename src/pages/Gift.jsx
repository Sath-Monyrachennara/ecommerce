import React from 'react';
import styled from "styled-components";
import { Star } from "@mui/icons-material";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { Link } from 'react-router-dom';

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
  dis: {
    color: "#111",
    backgroundColor: "#fabec8",
    top: "185px",
  }
}

const Gift = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-5'>
        <h2 className='text-center uppercase text-3xl font-nomarl'>our gifts</h2>
        <p className='text-sm text-center text-gray-500 mt-2'>A collection of plant-powered gifts for any occasion.</p>
        <div>
            <div className='flex flex-row align-middle justify-center'>
                <div className='text-center' style={styles.pro}>
                    <p className='absolute text-base py-0 px-4 rounded-sm mt-4' style={styles.dis}>25% OFF</p>
                    <div>
                        <img src={require('../img/giftsImg/img1.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </div>
                    <p style={styles.name}>RADICAL RETINALTS Smoothing Set</p>
                    <p style={styles.price}>$40.00</p>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </div>
                <div className='text-center mx-10' style={styles.pro}>
                    <p className='absolute text-base py-0 px-4 rounded-sm mt-3' style={styles.dis}>25% OFF</p>
                    <div>
                        <img src={require('../img/giftsImg/img2.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </div>
                    <p style={styles.name}>C STARS Brightening Set</p>
                    <p style={styles.price}>$56.00</p>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </div>
                <div className='text-center' style={styles.pro}>
                    <p className='absolute text-base py-0 px-4 rounded-sm mt-3' style={styles.dis}>25% OFF</p>
                    <div>
                        <img src={require('../img/giftsImg/img3.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </div>
                    <p style={styles.name}>MUSHROOM MAGIC Plumping Set</p>
                    <p style={styles.price}>$20.00</p>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </div>
            </div>

            <div className='flex flex-row align-middle justify-center my-10'>
                <div className='text-center' style={styles.pro}>
                    <p className='absolute text-base py-0 px-4 rounded-sm mt-4' style={styles.dis}>25% OFF</p>
                    <div>
                        <img src={require('../img/giftsImg/img5.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </div>
                    <p style={styles.name}>THE CLOUDS Hydration Set</p>
                    <p style={styles.price}>$120.00</p>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </div>
                <div className='text-center mx-10' style={styles.pro}>
                    <p className='absolute text-base py-0 px-4 rounded-sm mt-3' style={styles.dis}>25% OFF</p>
                    <div>
                        <img src={require('../img/giftsImg/img4.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </div>
                    <p style={styles.name}>WAVES OF CLARITY Pore Set</p>
                    <p style={styles.price}>$33.00</p>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </div>
                <div className='text-center' style={styles.pro}>
                    <p className='absolute text-base py-0 px-4 rounded-sm mt-3' style={styles.dis}>25% OFF</p>
                    <div>
                        <img src={require('../img/giftsImg/img6.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </div>
                    <p style={styles.name}>Jewel Box</p>
                    <p style={styles.price}>$46.00</p>
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

export default Gift
