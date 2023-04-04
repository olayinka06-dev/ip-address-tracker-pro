// import React from 'react';
// import {HiOutlineHome} from "react-icons/hi";
// import {RxPerson} from "react-icons/rx";
// import {AiOutlineFile, AiOutlineMail} from "react-icons/ai";
// import {BiBookContent} from "react-icons/bi";
// import {CgDatabase} from "react-icons/cg";
// import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import { Link, animateScroll as scroll, scroller } from 'react-scroll';
// import profileimg from './images/profile-img.jpg';

// const Navigation = () => {
//     // const [activeLink, setActiveLink] = useState('hero');

//     // const handleSetActive = (to) => {
//     //   setActiveLink(to);
//     // }
//     const [activeLink, setActiveLink] = useState('about');

//     const handleSetActive = (to) => {
//       setActiveLink(to);
//     };
  
//     useEffect(() => {
//       const onScroll = () => {
//         const currentSection = scroller.getActiveLink();
//         if (currentSection) {
//           setActiveLink(currentSection.name);
//         }
//       };
//       window.addEventListener('scroll', onScroll);
  
//       return () => window.removeEventListener('scroll', onScroll);
//     }, []);
//   return (
//     <Wrapper>
//       <aside>
//         <div class="profile">
//           <img src={profileimg} alt={profileimg} />
//           <h1 class="text-light">Alex Smith</h1>
//         </div>
//         <ul className='aside-desktop'>
//         <li >
//           <Link to="hero" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'hero' ? 'nav-link active' : 'nav-link'}>
//             Home
//           </Link>
//         </li>
//         <li >
//           <Link to="about" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'about' ? 'active' : 'nav-link'}>
//             About
//           </Link>
//         </li>
//         <li >
//           <Link to="services" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'services' ? 'nav-link active' : 'nav-link'}>
//             Services
//           </Link>
//         </li>
//         <li >
//           <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'}>
//             Contact
//           </Link>
//         </li>
      






//           {/* <li className={activeLink === 'hero' ? 'nav-link active' : 'nav-link'}>
//             <Link to="hero" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('hero')} ><HiOutlineHome className='icon'/>Home</Link>
//           </li>
//           <li className={activeLink === 'about' ? 'nav-link active' : 'nav-link'}>
//             <Link to="about" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('about')}><RxPerson className='icon'/>About</Link>
//           </li>
//           <li className={activeLink === 'resume' ? 'nav-link active' : 'nav-link'}>
//             <Link to="resume" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('resume')} ><AiOutlineFile className='icon'/>Resume</Link>
//           </li>
//           <li className={activeLink === 'portfolio' ? 'nav-link active' : 'nav-link'}>
//             <Link to="portfolio" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('portfolio')} ><BiBookContent className='icon'/>Portfolio</Link>
//           </li>
//           <li className={activeLink === 'services' ? 'nav-link active' : 'nav-link'}>
//             <Link to="services" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('services')} ><CgDatabase className='icon'/>Services</Link>
//           </li>
//           <li className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'}>
//             <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('contact')} ><AiOutlineMail className='icon'/>Contact</Link>
//           </li>
//           <li className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'}>
//             <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('contact')} ><AiOutlineMail className='icon'/>Contact</Link>
//           </li> */}
//        </ul>
//         {/* <ul className='aside-desktop'>
//           <li className='nav-link active'>
//             <Link to="hero" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive('hero')} className={activeLink === 'hero' ? 'active' : ''}><HiOutlineHome className='icon'/>Home</Link>
//           </li>
//           <li className='nav-link'>
//             <Link to="about" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive('about')} className={activeLink === 'about' ? 'active' : ''}><RxPerson className='icon'/>About</Link>
//           </li>
//           <li className='nav-link'>
//             <Link to="resume" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive('resume')} className={activeLink === 'resume' ? 'active' : ''}><AiOutlineFile className='icon'/>Resume</Link>
//           </li>
//           <li className='nav-link'>
//             <Link to="portfolio" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive('portfolio')} className={activeLink === 'portfolio' ? 'active' : ''}><BiBookContent className='icon'/>Portfolio</Link>
//           </li>
//           <li className='nav-link'>
//             <Link to="services" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive('services')} className={activeLink === 'services' ? 'active' : ''}><CgDatabase className='icon'/>Services</Link>
//           </li>
//           <li className='nav-link'>
//             <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive('contact')} className={activeLink === 'contact' ? 'active' : ''}><AiOutlineMail className='icon'/>Contact</Link>
//           </li>
//           <li className='nav-link'>
//             <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onSetActive={() => handleSetActive()} className={activeLink === 'contact' ? 'active' : ''}><AiOutlineMail className='icon'/>Contact</Link>
//           </li>
//        </ul> */}
//      </aside>
//     </Wrapper>
 
//   )
// }

// const Wrapper = styled.aside`
  
//   aside {
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 300px;
//     transition: all ease-in-out 0.5s;
//     z-index: 9997;
//     transition: all 0.5s;
//     padding: 0 15px;
//     background: rgb(255,255,255);
//     overflow-y: auto;
//   }
//   .profile h1{
//     text-align: center;
//   }
//   .profile img {
//     margin: 15px auto;
//     display: block;
//     width: 120px;
//     border: 8px solid rgb(242,243,245);
//     border-radius: 50%;
//   }
//   .aside-desktop{
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 14px;
//   }
//   .nav-link{
//     background-color: rgb(242,243,245);
//     padding: 13px 0;
//     padding-left: 7px;
//     border-radius: 20px;
//     overflow: hidden;
//     cursor: pointer;
//   }
//   .nav-link a{
//     color: rgb(69,80,91);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//   }
//   .nav-link:hover{
//     color: #fff;
//     background: #0563bb;
//   }
//   /* .nav-link:hover{
//     background-color: #0563bb;
//   } */
//   .nav-link:hover a{
//     color: white;
//   }
//   /* .active{
//     color: white;
//     background-color: #0563bb;
//   } */
//   .active{
//     background-color:  #0563bb;
//   }

//   .active a {
//     color: white;
//   }
//   /* .nav-link{
//     background-color: rgb(242,243,245);
//     padding: 13px 0;
//     padding-left: 7px;
//     border-radius: 20px;
//     overflow: hidden;
//     cursor: pointer;
//   }
//   a{
//     color: rgb(69,80,91);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//   }
//   .nav-link:hover{
//     color: #fff;
//     background: #0563bb;
//   }
//   .nav-link:hover{
//     background-color: #0563bb;
//   }
//   .nav-link:hover a{
//     color: white;
//   }
//   .active{
//     color: white;
//     background-color: #0563bb;
//   } */
//   .icon {
//     margin-right: 5px;
//     font-size: 1.5rem;
//   }
    


// `

// export default Navigation;

// // import { useState } from 'react';
// // import { Link, animateScroll as scroll } from 'react-scroll';

// // function Navbar() {
// //   const [activeLink, setActiveLink] = useState('home');

// //   const handleSetActive = (to) => {
// //     setActiveLink(to);
// //   }

// //   return (
// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="home" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'home' ? 'active' : ''}>Home</Link>
// //         </li>
// //         <li>
// //           <Link to="about" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'about' ? 'active' : ''}>About</Link>
// //         </li>
// //         <li>
// //           <Link to="services" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'services' ? 'active' : ''}>Services</Link>
// //         </li>
// //         <li>
// //           <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onSetActive={handleSetActive} className={activeLink === 'contact' ? 'active' : ''}>Contact</Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // import React from 'react';
// // import { Link } from 'react-scroll';

// // const Navbar = () => {
// //   return (
// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="home" smooth={true} duration={500}>Home</Link>
// //         </li>
// //         <li>
// //           <Link to="about" smooth={true} duration={500}>About</Link>
// //         </li>
// //         <li>
// //           <Link to="services" smooth={true} duration={500}>Services</Link>
// //         </li>
// //         <li>
// //           <Link to="contact" smooth={true} duration={500}>Contact</Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;

