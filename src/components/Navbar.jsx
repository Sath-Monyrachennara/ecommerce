import React from 'react';
import { Link } from 'react-router-dom';
import { PersonOutlineOutlined, ShoppingBasketOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const styles = {
    Navlink: {
        fontSize: "20px",
        color: "#1d1d1d",
        textTransform: "lowercase",
        cursor: "pointer",
        textDecoration: "none",
    },
    logo: {
        fontSize: "36px",
        color: "#1d1d1d",
        cursor: "pointer",
        letterSpacing: "1px",
        fontWeight: "420",
        textDecoration: "none",
    },
}

const Navbar = () => {
  return (
    <div className='container mx-auto flex align-middle justify-center py-4'>
        <div className='ml-12'>
            <Link to="/shop" className='px-5' style={styles.Navlink}>Shop</Link>
            <Link to="/blog" className='px-5' style={styles.Navlink}>Blogs</Link>
            <Link to="/about" className='px-5' style={styles.Navlink}>About</Link>
            <Link to="/contact" className='px-5' style={styles.Navlink}>Contact</Link>
        </div>
        <div className='mx-20'>
            <Link to="/" style={styles.logo}>HERBIVORE</Link>
        </div>
        <div className='flex mr-12'>
            <Link to="/gift" className='px-5' style={styles.Navlink}>Gifts</Link>
            <p className='px-6' style={styles.Navlink}>Eng</p>
            <PersonOutlineOutlined to="/signIn" sx={{ fontSize: "24px", mx: 2 }}/>
            <Badge badgeContent={4} color="primary" >
                <ShoppingBasketOutlined color="action" sx={{ fontSize: "24px" }}/>
            </Badge>
        </div>
    </div>
  )
}

export default Navbar
