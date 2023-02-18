import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import { Star } from "@mui/icons-material";

const Showstar = styled.div`
  color: #7391fe;
`;

const styles = {
    detailName: {
        fontSize: "22px",
        color: "#161616",
        margin: "3px 0px 0px",
        fontWeight: "500",
    },
    name: {
        fontSize: "17px",
        color: "#161616",
        margin: "3px 0px 0px",
    },
    price: {
        color: "#454545",
        margin: "5px 0px",
    },
    detail: {
        width: "400px"
    },
    input: {
        border: "2px solid #282828",
        padding: "1px 5px",
        borderRadius: "3px",
        width: "60px",
    },
    button: {
        fontSize: "17px",
        color: "#fff",
        backgroundColor: "#111",
        padding: "3px 20px",
        marginLeft: "20px",
    }
}

const Productdetail = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row align-middle justify-center my-10'>
        <div>
            <img src={require('../img/homeImg/img6.webp')} alt="" style={{width: "380px", height: "410px"}} />
        </div>
        <div className='pt-3 px-6'>
            <p style={styles.detailName}>Bakuchiol Retinol Alternative</p>
            <p className='text-sm mb-2' style={{color: "#787878"}}>Skin care</p>
            <Showstar>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </Showstar>
            <p className='font-medium mt-6' style={styles.price}>$45.00</p>
            <p style={styles.detail}>A potent brightening serum that combines the clinical strength of 15% THD vitamin C with super root turmeric to visibly improve dark spots and even skin tone while being gentle on skin.</p>
            <p className='mt-5' style={styles.detail}>NOVA is powered by THD vitamin C—a highly efficacious, oil-soluble to brighten dark spots and improve hyperpigmentation. At a potent.</p>
            <form action="" className='mt-10'>
                <input type="number" id="qty" name="qty" min="1" placeholder='1' style={styles.input} />
                <button type='submit' name='addCart' style={styles.button}>Add To Bag</button>
            </form>   
         </div>
      </div>
      <div className=''>
            <h2 className='text-center font-medium uppercase text-2xl mb-5 mt-10 pt-3'>Related Products</h2>
            <div className='mb-10'>
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
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Productdetail
