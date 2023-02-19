import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const styles = {
    borderTop: {
        borderTop: "2px solid #dcdbdb",
    },
    tableHead: {
        color: "#989696",
        fontWeight: "bold",
        fontSize: "13px",
    },
    chhead: {
        color: "#202020",
        fontWeight: "bold",
        fontSize: "14px",
    },
    checkoutForm: {
        backgroundColor: "#eae8e8",
        padding: "30px 25px",
        borderRadius: "5px",
    },
    input: {
        backgroundColor: "#fffefe",
        padding: "3px 10px",
        borderRadius: "3px",
    },
    ckeckoutBtn: {
        color: "#fff",
        backgroundColor: "#5a248d",
        padding: "7px 0px",
        width: "100%",
    },
    orderHead: {
        borderBottom: "2px solid #dcdbdb",
        paddingBottom: "15px",
    },
    topTotal: {
        borderTop: "2px solid #dcdbdb",
        paddingTop: "15px",
    }
}

const Cart = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-row align-middle justify-center my-10 pt-5 pb-10'>
            <div className='mx-10 w-1/2'>
                <div>
                    <div className='mb-5'>
                        <h2 className='font-medium text-lg'>Shopping Cart</h2>
                    </div>
                    <div className='pt-5 flex flex-row align-middle justify-between' style={styles.borderTop}>
                        <div className='flex flex-col'>
                            <p className='uppercase' style={styles.tableHead}>product details</p>
                            <div className='flex flex-row my-6'>
                                <img src={require('../img/homeImg/img10.webp')} alt="" style={{width: "75px", height: "75px"}} />
                                <div className='ml-4'>
                                    <p>Product Name</p>
                                    <p>Skincare</p>
                                    <button type='button'>Remove</button>
                                </div>
                            </div>
                            <div className='flex flex-row my-6'>
                                <img src={require('../img/homeImg/img10.webp')} alt="" style={{width: "75px", height: "75px"}} />
                                <div className='ml-4'>
                                    <p>Product Name</p>
                                    <p>Skincare</p>
                                    <button type='button'>Remove</button>
                                </div>
                            </div>
                            <div className='flex flex-row my-6'>
                                <img src={require('../img/homeImg/img10.webp')} alt="" style={{width: "75px", height: "75px"}} />
                                <div className='ml-4'>
                                    <p>Product Name</p>
                                    <p>Skincare</p>
                                    <button type='button'>Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='uppercase' style={styles.tableHead}>quantity</p>
                            <input type="number" min="1" placeholder='1' className='my-6' />
                            <input type="number" min="1" placeholder='1' className='my-10 py-4' />
                            <input type="number" min="1" placeholder='1' className='my-10 py-4' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='uppercase' style={styles.tableHead}>price</p>
                            <p className='my-6'>$54.00</p>
                            <p className='my-10 py-4'>$54.00</p>
                            <p className='my-10 py-4'>$54.00</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='uppercase' style={styles.tableHead}>total</p>
                            <p className='my-6'>$100.00</p>
                            <p className='my-10 py-4'>$100.00</p>
                            <p className='my-10 py-4'>$100.00</p>
                        </div>  
                    </div>
                </div>
                <Link to="/shop" className='mt-5 underline' >Continuce Shopping</Link>
            </div>

            <div className='w-1/4' style={styles.checkoutForm}>
                <h2 className='font-medium text-lg ' style={styles.orderHead}>Order Summary</h2>
                <div className='flex flex-row align-middle justify-between my-5'>
                    <p className='uppercase' style={styles.chhead}>items 3</p>
                    <p className='uppercase' style={styles.chhead}>$450.0</p>
                </div>
                <form action="" >
                    <div className='mb-5'>
                        <p className='uppercase mb-5' style={styles.chhead}>payment methods</p>
                        <select name="shipping" id="shipping" className='w-full' style={styles.input}>
                            <option value="" disabled>ABA BANK</option>
                            <option value="aba">ABA BANK</option>
                            <option value="wing">WING BANK</option>
                            <option value="acleda">ACLEDA BANK</option>
                            <option value="woori">WOORI BANK</option>
                        </select>
                    </div>
                    <div>
                        <p className='uppercase mb-5' style={styles.chhead}>your email</p>
                        <input type="email" id='email' name='email' className='w-full' placeholder='herbvious@gmail.com' style={styles.input}/>
                    </div>
                    <div className='flex flex-row align-middle justify-between mt-6 mb-5' style={styles.topTotal}>
                        <p className='uppercase' style={styles.chhead}>total cost</p>
                        <p className='uppercase' style={styles.chhead}>$450.90</p>
                    </div>
                    <button type='submit' id="checkout" name="checkout" className='uppercase' style={styles.ckeckoutBtn}>checkout</button>
                </form>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart
