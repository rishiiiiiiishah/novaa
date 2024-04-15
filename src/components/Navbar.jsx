import './navbar.css'
// import React, {useState} from 'react'
import React from 'react';
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import team from '../images/teamicon-removebg-preview.png'
// import logo from '../images/Logo.png'
import home from '../images/homeicon-removebg-preview.png';
import contact from '../images/contacticon-removebg-preview.png'
import eventGallery from '../images/eventicon-removebg-preview.png'
import magazine from '../images/magazine.png'
// import {link} from 'react-scroll';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
// import Home from '../pages/HeroSection'
// import About from '../pages/AboutUs'
// import Contact from '../pages/Contact'


function Navbar(){
    // const [nav, setNav] = useState(false)

    // const handleNav = ()=>{
    //   setNav(!nav)
    // }

    // const handleClose=()=>{
    //     setNav(false)
    // } 
  
  
  return( 
    //   <div id= 'homeP' className="main">
        <nav className="navbar">
          <ul>
            
            {/* <li><img className='homelogo pic' src={home} alt="" /><p><Link to ="Home" spy={true} smooth={true} offset={0} duration={500}> Home </Link></p></li> */}
            <li><img className='homelogo pic' src={home} alt="" /><p><HashLink to={'/#home'} spy={true} smooth={true} offset={0} duration={500}> Home </HashLink></p></li>
            
            <li><img className='teamlogo pic' src={team} alt="" /><p><HashLink to={'/#about'} spy={true} smooth={true} offset={0} duration={500}> About Us</HashLink></p></li>
            <li><img className='eventlogo pic' src={eventGallery} alt="" /><p><Link to ='/EventGallery' spy={true} smooth={true} offset={0} duration={500}>Event Gallery</Link></p></li>
            <li><img className='magazinelogo pic' src={magazine} alt="" /><p><Link to ='/magazine' spy={true} smooth={true} offset={0} duration={500}>Magazines</Link></p></li>
            <li><img className='contactlogo pic' src={contact} alt="" /><p><HashLink to={'/#contact'} spy={true} smooth={true} offset={0} duration={500}> Contact Us </HashLink></p></li>
          </ul>
          {/* <div onClick={handleNav} className='block md:hidden'>
            {!nav ?<AiOutlineClose onClose={handleClose} size={20}/>:<AiOutlineMenu size={20}/> }
       </div> */}
       {/* <div  onClose={handleClose} className={!nav ? 'block md:hidden fixed left-0 top-0 w-100%] h-full border-r ease-in-out duration-500' : 'fixed left-[-100%]'}>
       <ul>
            <li><img className='homelogo pic' src={home} alt="" /><p>Home</p></li>
            <li><img className='teamlogo pic' src={team} alt="" /><p>About Us</p></li>
            <li><img className='eventlogo pic' src={eventGallery} alt="" /><p>Event Gallery</p></li>
            <li><img className='magazinelogo pic' src={magazine} alt="" /><p>Magazine</p></li>
            <li><img className='contactlogo pic' src={contact} alt="" /><p>Contact Us</p></li>
          </ul>
       </div> */}
        </nav>       
    //   </div>

  )
}


export default Navbar