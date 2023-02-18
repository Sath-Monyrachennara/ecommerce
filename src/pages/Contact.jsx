import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img25 from '../img/homeImg/img10.webp';

const styles = {
    conimg: {
        width: "400px",
        height: "400px",
        objectFit: "cover",
    },
    header: {
        color: "#1d1d1d",
    },
    p: {
        width: "400px",
    },
    info: {
        color: "#2b2a2a",
        fontWeight: "500",
    },
    headform: {
        color: "#1c1c1c",
        fontSize: "18px",
    },
    input: {
        width: "auto",
        border: "none",
        outline: "none",
        marginBottom: "20px",
        borderBottom: "2px solid #9b9a9a",
    },
    txtarea: {
        width: "auto",
        border: "none",
        outline: "none",
        borderBottom: "2px solid #9b9a9a",
    },
    button: {
        fontSize: "16px",
        color: "#1d1d1d",
        border: "2px solid #262626",
        cusor: "pointer",
        padding: "5px 30px",
        margin: "30px 0px",
        float: "left",
        width: "170px",
    },
    contform: {
        width: "34%",
    }
}

const Contact = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='flex flex-row align-middle justify-center my-10 mb-10 ml-20'>
        <div style={styles.conimg}>
            <img src={img25} alt="" style={{borderRadius:"5px"}} />
        </div>
        <div className='mx-9' style={styles.contform}> 
            <h2 className='text-3xl font-medium mb-2' style={styles.header}>Contact us</h2>
            <p className='text-gray-500 text-base ' style={styles.p}>Fill this out so we can learn more about you and your needs.</p>
            <div className='flex flex-row my-5'>
                <div className='mr-5'>
                    <p className='text-gray-500'>Address</p>
                    <p style={styles.info}>st.13 Avenue PP</p>
                </div>
                <div className='mr-5'>
                    <p className='text-gray-500'>Email</p>
                    <p style={styles.info}>herbivore@gmail.com</p>
                </div>
                <div>
                    <p className='text-gray-500'>Phone</p>
                    <p style={styles.info}>012-346-908</p>
                </div>
            </div>
            <form action="" className='flex flex-col align-middle justify-center'>
                <h2 className='font-normal mb-3' style={styles.headform}>Get a quote</h2>
                <input type="text" placeholder="Full name" style={styles.input}/>
                <input type="email" placeholder="Email address" style={styles.input}/>
                <input type="number" placeholder="Phone numbers" style={styles.input}/>
                <textarea name="message" id="" cols="20" rows="3" placeholder="Messages" style={styles.txtarea}></textarea>
                <button type="submit" name='sumbmit' style={styles.button}>Send Message</button>
            </form>
        </div> 
        </div>
      <Footer />
    </div>
  )
}

export default Contact
