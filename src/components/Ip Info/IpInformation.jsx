import React, { useState } from 'react';
import styled from 'styled-components';
import '../../index.css';
import {MdLocationPin} from 'react-icons/md'
const IpInformation = ({ipInfo}) => {

  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShow(!show)
}
  const handleShowInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <Wrapper>
        <div className='location'>
          <span onClick={handleShowInfo}><MdLocationPin className='span'/></span>
        </div>
        {
          ipInfo && (
            <IpInfo>
              <Info>
                <h4>IP Address</h4>
                <h2>{ipInfo.ip}</h2>
              </Info>
              <Info>
                <h4>Location</h4>
                <Showmore>
                  <h2>{ipInfo.location.country}</h2>
                  <button onClick={handleClick}>
                  <p style={{zIndex: "30"}}>show more</p>
                  <div style={{height: `${show ? "15vh" : "0vh"}`, transition: "all 1s ease", backgroundColor: "white"}}>
                    <h3>Region: {ipInfo.location.region}</h3>
                    <h3>City: {ipInfo.location.city}</h3>
                    <h3>PostalCode: {ipInfo.location.postalCode}</h3>
                  </div>
                  </button>
                </Showmore>
                </Info>
              {/*  */}
              <Info>
                <h4>Timezone</h4>
                <h2>UTC {ipInfo.location.timezone}</h2>
              </Info>
              <Info>
                <h4>ISP</h4>
                <h2>{ipInfo.location.isp}</h2>
              </Info>
            </IpInfo>
          )
        }
        {
          ipInfo && (
            <IpInfoMobile style={{transform: `scale(${showInfo ? "100%" : "0%"})`, padding: `${showInfo ? "20px" : "0px"}`}}>
              <Info>
                <h4>IP Address</h4>
                <h2>{ipInfo.ip}</h2>
              </Info>
              <Info>
                <h4>Location</h4>
                <Showmore>
                  <h2>{ipInfo.location.country}</h2>
                  <h2><span>Region:</span> {ipInfo.location.region}</h2>
                  <h2><span>City: </span>{ipInfo.location.city}</h2>
                  <h2><span>PostalCode: </span> {ipInfo.location.postalCode}</h2>
                </Showmore>
              </Info>
             
              <Info>
                <h4>Timezone</h4>
                <h2>UTC {ipInfo.location.timezone}</h2>
              </Info>
              <Info>
                <h4>ISP</h4>
                <h2>{ipInfo.location.isp}</h2>
              </Info>
            </IpInfoMobile>
          )
        }
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .location{
    display: none;
  }
  @media screen and (max-width: 950px) {
    .location{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .span{
      color: white;
      font-size: 30px;
      animation: animate 2s linear infinite;
      margin-bottom: 20px;

    }
    @keyframes animate {
    0%{transform: translateY(10px);}
    50%{transform: translateY(0px);}
    100%{transform: translateY(10px);}
    }
}
`;
const IpInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 13vh;
  background-color: white;
  padding: 25px 20px;
  border-radius: 20px;
  z-index: 20;
  gap: 30px;
  transition: all 1s ease;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
const IpInfoMobile = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    z-index: 20;
    gap: 12px;
    transition: all 1s ease;
    overflow: hidden;
    h2{
      font-size: 20px;
    }
  }
`
const Showmore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  button{
    position: relative;
    border: none;
    background-color: white;
    color: black;
  }
  div{
    position: absolute;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media screen and (max-width: 950px) {
    flex-direction: column;
    h2{
      font-size: 20px;
    }
  }
`
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid lightgray;
  &:nth-of-type(4){
    border: none;
  }
  h4{
    color: #b3aeae;
  }
  @media screen and (max-width: 950px) {
    gap: 8px;
    align-items: center;
    border: none;
    h2{
      font-size: 16px;
    }
    span{
      color: #b3aeae;
    }
  }
`;
export default IpInformation;