import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const styles = {
    form: {
        width: "380px",
    },
    head: {
        fontSize: "35px",
    },
    header: {
        borderBottom: "2.5px solid #111",
        fontSize: "17px",
    },
    input: {
        backgroundColor: "#e7e7e7",
        borderRadius: "3px",
        width: "auto",
    },
    button: {
        backgroundColor: "#691f8e",
        color: "#fff",
        cusor: "pointer",
        padding: "6px 0px",
        borderRadius: "3px",
    },
    link: {
        fontSize: "12px",
        color: "#76299c",
        textDecoration: "underline",
        cusor: "pointer",
        fontWeight: "500",
    },
    small: {
        fontSize: "12px",
        color: "#837f7f",
        fontWeight: "500",
    },
    p: {
        width: "370px",
    }
}

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className='my-10 pb-10'>
        <h1 className='font-medium tracking-wide uppercase text-center mb-5' style={styles.head}>account</h1>
        <div className='mx-auto mb-7 text-center'>
            <Link to="/signIn" className='font-medium uppercase px-11' >Sing in</Link>
            <Link to="/register" className='font-medium uppercase pb-2 px-11' style={styles.header}>Register</Link>
        </div>
        <div className='flex flex-col align-middle justify-center mx-auto mb-10 pb-10' >
            <p className='mt-3 mx-auto' style={styles.p}>Create an account and benefit from a more personal shopping experience, and quicker online checkout.</p>
            <p className='my-3 mx-auto' style={styles.p}>All fields are mandatory.</p>
            <form action="" className='flex flex-col align-middle justify-center mx-auto' style={styles.form}> 
                <input type="email" name="email" id="email" placeholder='Email' className='mt-3 py-2 px-1' style={styles.input} required />
                <input type="text" name="fname" id="fname" placeholder='First name' className='mt-5 py-2 px-1' style={styles.input} required />
                <input type="text" name='lname' id='lname' placeholder='Last name' className='mt-5 py-2 px-1' style={styles.input} required />
                <input type="password" name='password' id='password' placeholder='Password' className='mt-5 py-2 px-1' style={styles.input} required />
                <button type='submit' name="signIn" className='mt-8' style={styles.button}>Sign In</button>
                <small style={styles.small} className="text-center">don't have an account? 
                    <Link to="/register" style={styles.link}>register now</Link>
                </small>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
