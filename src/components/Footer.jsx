import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const styles = {
    footer: {
        backgroundColor: "#373737",
        paddingBottom: "30px",
    },
    row: {
        padding: "50px 0px 20px",
        backgroundColor: "#373737",
    },
    column: {
        margin: "0px 50px",
    },
    h2: {
        fontSize: "28px",
        color: "#efeded",
        marginBottom: "5px",
    },
    ul: {
        listStyle: "none",
        fontSize: "20px",
        marginLeft: "-40px",
    },
    li: {
        marginBottom: "10px",
        color: "#f3f3f3",
    },
    a: {
        textDecoration: "none",
        color: "#f3f3f3",
    },
    p: {
        fontSize: "16px",
        color: "#f3f3f3",
        width: "290px",
        marginTop: "20px",
    },
    input: {
        fontSize: "14px",
        padding: "11px 10px",
        border: "1px solid #1d1d1d",
        borderRadius: "3px",
        marginTop: "13px",
    },
    button: {
        fontSize: "17px",
        backgroundColor: "#fff",
        cusor: "pointer",
        padding: "6px 30px",
        borderRadius: "3px",
        display: "block",
        margin: "30px 0px 0px",
        border: "none",
    },
    icons: {
        color: "#f3f3f3", 
        fontSize: "36px", 
        margin: "0px 10px",
    }

}


const Footer = () => {
  return (
    <div style={styles.footer}>
        <div className='flex align-middle justify-center' style={styles.row}>
            <div className='mx-auto'  style={styles.column}>
                <h2 className='font-medium uppercase ' style={styles.h2}>Some Links</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Link to="/" style={styles.a}>Home</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/shop" style={styles.a}>Shop</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/blog" style={styles.a}>Blogs</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/about" style={styles.a}>About</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/sale" style={styles.a}>Sales</Link>
                    </li>
                </ul>
            </div>
            
            <div style={styles.column}>
                <h2 className='font-medium uppercase' style={styles.h2}>Extra Links</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Link to="/contact" style={styles.a}>Contact</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/gift" style={styles.a}>Gifts</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/signIn" style={styles.a}>Sign In</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/cart" style={styles.a}>Cart</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/register" style={styles.a}>Register</Link>
                    </li>
                </ul>
            </div>

            <div style={styles.column}>
                <h2 className='font-medium uppercase' style={styles.h2}>Our Locations</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>Phnom Penh</li>
                    <li style={styles.li}>Siem Reap</li>
                    <li style={styles.li}>Takeo</li>
                    <li style={styles.li}>Battambang</li>
                    <li style={styles.li}>Knal</li>
                </ul>
            </div>
            <div style={styles.column}>
                <h2 className='font-medium uppercase' style={styles.h2}>New Letters</h2>
                <form>
                    <p style={styles.p}>If you have any questions, please contact us for more informaition</p>
                    <input type="email" placeholder="herbivore@gmail.com" style={styles.input}/>
                    <button type="submit" style={styles.button}>Contact Us</button>
                </form>
            </div>
        </div>
        <div>
            <div className='flex align-middle justify-center'>
                <FacebookOutlined style={styles.icons} />
                <LinkedIn style={styles.icons} />
                <Instagram style={styles.icons} />
                <Twitter style={styles.icons} />
                <YouTube style={styles.icons} />
            </div>
        </div>
    </div>
  )
}

export default Footer
