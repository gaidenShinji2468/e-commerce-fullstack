import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton' 


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Navbar <span>Diego!</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Home</a>
          <a onClick={handleClick} href="#h">Shop</a>
          <a onClick={handleClick} href="#h">About</a>
          <a onClick={handleClick} href="#h">Contact</a>
          <a onClick={handleClick} href="#h">Blog</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar
const NavContainer = styled.nav`
  h2{
    color:black;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background: rgba(255,255,255,0.5);
  border: 4px solid rgba(255, 225, 225, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color:black;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    a{
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.3rem;
        color: black;
        display: inline;
        font-weight:sans-serif;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    
    a{
      font-size: 3rem;
      margin-top: 1rem;
      color:red;
      padding:25px;  
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
    background: rgba(255,255,255,0.1);
    border: 4px solid rgba(255, 225, 225, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); 
    position: absolute;
    top: -1000px;
    left: -1000px;
     width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`