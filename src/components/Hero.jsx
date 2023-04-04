import React from 'react';
import styled from 'styled-components';
import {AiOutlineTwitter} from 'react-icons/ai';
import {RiFacebookFill} from 'react-icons/ri';
import {IoLogoInstagram} from 'react-icons/io';
import {FaLinkedinIn} from "react-icons/fa";
import bgImg from './images/hero-bg.jpg';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';


const Hero = () => {
  return (
    <Wrapper>
    <section id="hero">
      <div class="container">
      <Fade right collapse>
        <h1>Olayinka_Dev</h1>
      </Fade>

        <Typical
          steps={['Im a', 10, 'Senior MERN Developer', 10]}
          loop={Infinity}
          wrapper="p"
        />

        <div class="social-links">
          <Link to={'/'}><AiOutlineTwitter/></Link>
          <Link to={'/'}><RiFacebookFill/></Link>
          <Link to={'/'}><IoLogoInstagram/></Link>
          <Link to={'/'}><FaLinkedinIn/></Link>
        </div>
      </div>
    </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  section {
    width: 100%;
    height: 100vh;
    background: url(${bgImg}) top right no-repeat;
    background-size: cover;
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media (min-width: 992px) {
    section {
      padding-left: 350px;
    }
  }

  section:before {
    content: "";
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  /* @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  } */
  .container {
    position: relative;
    z-index: 2;
    min-width: 300px;
  }

  .container h1{
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #45505b;
  }

  .container p {
    color: #45505b;
    margin: 15px 0 0 0;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
  }
  .social-links {
    margin-top: 30px;
  }

  .social-links a {
    font-size: 24px;
    display: inline-block;
    color: #45505b;
    line-height: 1;
    margin-right: 20px;
    transition: 0.3s;
  }

  .social-links a:hover {
    color: #0563bb;
  }

  @media screen and (max-width: 992px) {
    #hero {
      text-align: center;
    }
    .container{
      z-index: 50 !important;
      min-width: 0;
      width: 100%;
    }
    .container h1 {
      font-size: 32px;
      line-height: 36px;
    } 
    .container p {
      margin-top: 10px;
      font-size: 20px;
      line-height: 24px;
    }
}



`

export default Hero;

// import React, { Component } from 'react'
// import Typical from 'react-typical'
 
// class Example extends React.Component {
//   render () {
//     return (
//       <Typical
//         steps={['Hello', 1000, 'Hello world!', 500]}
//         loop={Infinity}
//         wrapper="p"
//       />
//     )
//   }
// }