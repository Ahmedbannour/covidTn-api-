import React, {useState} from 'react';
import {Button } from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './../assets/images/coronavirus.png'; 


function Navbar (){
    const [click , setClick] =useState(false);
    const [dropdown , setDropDown] = useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        }else{
            setDropDown(true);
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        }else{
            setDropDown(false);
        }
    }
    return (
        <>
        <nav className="navbar">
            <Link to='/' className="navbar-logo">Covid.<span>Tn</span><img src={logo} className="logoImg"  width={20} height={20} /></Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='#' className='nav-links' onClick={closeMobileMenu}> Visualisation <i className="fas fa-caret-down"></i> </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}> Contact Us </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up </Link>
                </li>
            </ul>
            <Button />
        </nav>
        </>
    )
}
export default Navbar;