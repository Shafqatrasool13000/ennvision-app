import React from 'react'
import HeroSection from './HeroSection'
import { HomeStyled } from './style';
import scroll_up from '../../assets/icons/ic_scroll_to_top .svg';
const Index = () => {
  return (
    <HomeStyled>
      <span className='arrow-box'>
        <img src={scroll_up} alt="scroll-up" />
      </span>
      <HeroSection/>
    </HomeStyled>
  )
}

export default Index