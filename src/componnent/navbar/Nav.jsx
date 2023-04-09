import React from 'react';
import './Nav.css'
import img from '../../assets/nav.jpg'

const Nav = () => {
    return (
        <div className='header-nav'>
            <h1>Knowledge Cafe</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Nav;