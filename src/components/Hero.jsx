import React from 'react';
import styled from 'styled-components';
import {AiOutlineTwitter} from 'react-icons/ai';
import {RiFacebookFill} from 'react-icons/ri';
import {IoLogoInstagram} from 'react-icons/io';
import {FaLinkedinIn} from "react-icons/fa";
import bgImg from './images/hero-bg.jpg';
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <Wrapper>
    <section id="hero">
    <div class="container">
      <h1>Olayinka_Dev</h1>
      <p>I'm a <span class="typed" data-typed-items="Designer, Developer, Freelancer, UI/UX Designer"></span></p>
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
  }

  /* .hero:before {
    content: "";
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  } */

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