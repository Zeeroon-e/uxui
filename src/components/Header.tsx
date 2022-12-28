import React, { useState } from 'react'
import './header.scss'
import { useNavigate } from 'react-router'

function Header({animationName,setAnimationName}: any) {
  const navigate = useNavigate();


  
  const sneakupBtn = () => {
    if (animationName == 'bouncein') {
      setAnimationName('sneakup')
   }
    console.log(animationName);
    
  }
  const bounceinBtn = () => {
    if (animationName == 'sneakup') {
      setAnimationName('bouncein')
   }
    console.log(animationName);
    
  }
  return (
    <div className='nav'>
      <ul>
        <li onClick={() => navigate('/')}>Winners by category</li>
        <li onClick={() => navigate('/gender')}>Winners by gender</li>
        <li onClick={() => navigate('/country')}>Winners by country</li>
        <li onClick={() => navigate('/year')}>Price by year</li>
      </ul>
      <section className='btn-section'>
        <button onClick={sneakupBtn}>SneakUp</button>
        <button onClick={bounceinBtn}>BounceIn</button>
      </section>
    </div>
  )
}

export default Header
