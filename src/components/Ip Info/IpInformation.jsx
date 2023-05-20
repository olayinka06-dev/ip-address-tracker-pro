import React, { useState } from 'react';
import styled from 'styled-components';
import '../../index.css';
import {TbWorld} from 'react-icons/tb'
const IpInformation = ({ipInfo, loading}) => {

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
          <span onClick={handleShowInfo}><TbWorld className='span'/></span>
        </div>
        {
          loading ? (
            <Loading></Loading>
          ) : (
            ipInfo&&(
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
                  <p style={{zIndex: "1000 !important"}}>show more</p>
                  <div style={{height: `${show ? "15vh" : "0vh"}`, transition: "all 1s ease", width: "200px", backgroundColor: "white"}}>
                    <h3><span>Region:</span> {ipInfo.location.region}</h3>
                    <h3><span>City:</span> {ipInfo.location.city}</h3>
                    <h3><span>PostalCode:</span> {ipInfo.location.postalCode}</h3>
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
          )
        }
        {
          ipInfo && (
            <IpInfoMobile style={{transform: `scale(${showInfo ? "100%" : "0%"})`, height: `${showInfo ? "60vh" : "0vh"}`, padding: `${showInfo ? "20px" : "0px"}`}}>
              <Info>
                <h4>IP Address</h4>
                <h2>{ipInfo.ip}</h2>
              </Info>
              <Info>
                <h4>Location</h4>
                <Showmore>
                  <h2><span>Country: </span>{ipInfo.location.country}</h2>
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
    align-items: flex-start;
    background-color: white;
    border-radius: 20px;
    z-index: 20;
    height: 0;
    gap: 12px;
    transition: all 1s ease;
    overflow: hidden;
    padding: 0;
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
  span{
    color: #b3aeae;
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
    border-bottom: 1px solid black;
    border-collapse: collapse;
    h2{
      font-size: 16px;
    }
    span{
      color: #b3aeae;
    }
  }
`;
const Loading = styled.div`

  width: 50px;
  height: 50px;
  border-left: 5px solid white;
  border-right: 5px solid white;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 50%;
  animation: loading 4s linear infinite;
  margin: 0 auto;
  position: relative;
  bottom: 30px;

  @keyframes loading {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
`
export default IpInformation;