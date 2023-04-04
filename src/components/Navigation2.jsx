import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import profileimg from './images/profile-img.jpg';
import {HiOutlineHome} from "react-icons/hi";
import {RxPerson} from "react-icons/rx";
import {AiOutlineFile, AiOutlineMail} from "react-icons/ai";
import {BiBookContent} from "react-icons/bi";
import {CgDatabase} from "react-icons/cg";
import Fade from 'react-reveal/Fade';



const Navigation2 = () => {
  const [activeLink, setActiveLink] = useState('hero');
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
      setMenu(!menu)
  }

  const handleSetActive = (to) => {
    setActiveLink(to);
  }

  return (
    <Wrapper>
    <aside  className={`${menu ? 'mobile-toggler' : ''}`}>
      <div class="profile">
        <img src={profileimg} alt={profileimg} />
        <h1 class="text-light">Alex Smith</h1>
      </div>
      <ul className='aside-desktop'>
        <Fade left>
          <li className={activeLink === 'hero' ? 'active' : ''}>
            <Link to="hero" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('hero')}><HiOutlineHome className='icon'/>Home</Link>
          </li>
        </Fade>
        <Fade right>
          <li className={activeLink === 'about' ? 'active' : ''}>
            <Link to="about" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('about')}><RxPerson className='icon'/>About</Link>
          </li>
        </Fade>
        <Fade left>
          <li className={activeLink === 'resume' ? 'active' : ''}>
            <Link to="resume" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('resume')}><AiOutlineFile className='icon'/>Resume</Link>
          </li>
        </Fade>
        <Fade right>
          <li className={activeLink === 'portfolio' ? 'active' : ''}>
            <Link to="portfolio" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('portfolio')}><BiBookContent className='icon'/>Portfolio</Link>
          </li>
        </Fade>
        <Fade left>
          <li className={activeLink === 'services' ? 'active' : ''}>
            <Link to="services" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('services')}><CgDatabase className='icon'/>Services</Link>
          </li>
        </Fade>
        <Fade right>
          <li className={activeLink === 'contact' ? 'active' : ''}>
            <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('contact')}><AiOutlineMail className='icon'/>Contact</Link>
          </li>
        </Fade>
        <Fade left>
          <li className={activeLink === 'services' ? 'active' : ''}>
            <Link to="services" smooth={true} duration={500} spy={true} offset={-70} onClick={() => handleSetActive('services')}><AiOutlineMail className='icon'/>Portfolio</Link>
          </li>
        </Fade>
      </ul>
      <button onClick={toggleMenu} className={`${menu ? 'toggle open' : 'toggle'}`}>
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </button>
    </aside>

    </Wrapper>
  );
}

const Wrapper = styled.aside`

  aside{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: rgb(255,255,255);
    overflow-y: auto;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0px 4px 4px rgb(222, 225, 232);
  }
  .profile h1{
    text-align: center;
  }
  .profile img {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid rgb(242,243,245);
    border-radius: 50%;
  }
  .aside-desktop{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  li {
    background-color: rgb(242,243,245);
    padding: 13px 0;
    padding-left: 7px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  li:hover {
    color: #fff;
    background: #0563bb;
  }

  li:hover a {
  color: white;
  }

  li.active {
    background-color:  #0563bb;
  }

  li.active a {
    color: white;
  }

  li a {
    color: rgb(69,80,91);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon {
    margin-right: 5px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    aside {
      width: 300px;
      background: #fff;
      border-right: 1px solid #e6e9ec;
      left: -300px;
      overflow: hidden;
    }
    .mobile-toggler{
      left: 0;
    }
    .toggle{
      display: flex;
    }

  }

`


export default Navigation2;
