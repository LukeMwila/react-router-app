import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
}

export default Navigation